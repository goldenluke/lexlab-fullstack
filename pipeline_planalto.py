import requests
from bs4 import BeautifulSoup
import psycopg2
import json
import time
from tqdm import tqdm
from tenacity import retry, stop_after_attempt, wait_exponential
from concurrent.futures import ThreadPoolExecutor

# ================= CONFIG =================
DB = dict(
    host="localhost",
    port=5433,
    user="postgres",
    password="lexlab",
    database="lexlab"
)

MAX_WORKERS = 5
BATCH_SIZE = 50

# ================= DB =================
conn = psycopg2.connect(**DB)
cur = conn.cursor()

# ================= LEIS =================
LEIS = [
    ("CF/88","https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm"),
    ("Código Penal","https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm"),
    ("Código Civil","https://www.planalto.gov.br/ccivil_03/leis/2002/L10406compilada.htm")
]

# ================= RETRY =================
@retry(stop=stop_after_attempt(5), wait=wait_exponential(multiplier=1, min=2, max=10))
def fetch(url):
    r = requests.get(url, timeout=15)
    r.raise_for_status()
    return r.text

# ================= EXTRAÇÃO =================
def extrair_artigos(html):

    soup = BeautifulSoup(html, 'html.parser')
    texto = soup.get_text("\n")

    linhas = texto.split("\n")

    artigos = []
    atual = ""

    for l in linhas:

        l = l.strip()

        if not l:
            continue

        if l.lower().startswith("art."):

            if atual:
                artigos.append(atual.strip())

            atual = l

        else:
            atual += " " + l

    if atual:
        artigos.append(atual.strip())

    # filtro lixo
    artigos = [a for a in artigos if len(a) > 80]

    return artigos

# ================= INSERT EM LOTE =================
def insert_batch(batch):

    if not batch:
        return

    query = """
        INSERT INTO documentos
        (titulo,conteudo,tipo,subtipo,metadata)
        VALUES (%s,%s,%s,%s,%s)
    """

    cur.executemany(query, batch)
    conn.commit()

# ================= PROCESSAR LEI =================
def processar_lei(nome, url):

    print(f"\n📥 {nome}")

    try:
        html = fetch(url)
    except Exception as e:
        print(f"❌ erro download {nome}: {e}")
        return 0

    artigos = extrair_artigos(html)

    print(f"📊 {len(artigos)} artigos válidos")

    batch = []
    total = 0

    for art in tqdm(artigos, desc=nome):

        batch.append((
            nome,
            art,
            'lei_seca',
            nome,
            json.dumps({"fonte":"planalto"})
        ))

        if len(batch) >= BATCH_SIZE:
            insert_batch(batch)
            total += len(batch)
            batch = []

    # resto
    insert_batch(batch)
    total += len(batch)

    print(f"✅ {nome}: {total} inseridos")

    return total

# ================= EXECUÇÃO =================
inicio = time.time()

total_geral = 0

with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:

    futures = [
        executor.submit(processar_lei, nome, url)
        for nome, url in LEIS
    ]

    for f in futures:
        total_geral += f.result()

fim = time.time()

print("\n==============================")
print(f"🔥 TOTAL: {total_geral}")
print(f"⏱️ TEMPO: {round(fim-inicio,2)}s")
print("==============================")

cur.close()
conn.close()
