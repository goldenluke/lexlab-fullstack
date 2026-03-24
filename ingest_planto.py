import requests
from bs4 import BeautifulSoup
import psycopg2
from tqdm import tqdm

# ================= DB =================
conn = psycopg2.connect(
    host="localhost",
    port=5433,
    user="postgres",
    password="lexlab",
    database="lexlab"
)

cur = conn.cursor()

# ================= LEIS ALVO =================
leis = [
    ("Constituição Federal", "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm"),
    ("Código Penal", "https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm"),
    ("Código Civil", "https://www.planalto.gov.br/ccivil_03/leis/2002/L10406compilada.htm"),
    ("CLT", "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452compilado.htm"),
    ("CDC", "https://www.planalto.gov.br/ccivil_03/leis/l8078.htm"),
]

# ================= FUNÇÃO =================
def extrair_artigos(url):

    r = requests.get(url)
    soup = BeautifulSoup(r.text, 'html.parser')

    textos = soup.get_text("\n")

    linhas = textos.split("\n")

    artigos = []
    atual = ""

    for l in linhas:

        l = l.strip()

        if l.lower().startswith("art."):
            if atual:
                artigos.append(atual)
            atual = l
        else:
            atual += " " + l

    if atual:
        artigos.append(atual)

    return artigos


# ================= INGESTÃO =================
for nome, url in leis:

    print(f"\n📥 {nome}")

    artigos = extrair_artigos(url)

    for art in tqdm(artigos):

        if len(art) < 30:
            continue

        cur.execute("""
            INSERT INTO documentos (titulo,conteudo,tipo,subtipo,metadata)
            VALUES (%s,%s,%s,%s,%s)
        """,(
            nome,
            art,
            'lei_seca',
            nome,
            {"fonte":"planalto"}
        ))

    conn.commit()

print("\n✅ INGESTÃO CONCLUÍDA")
