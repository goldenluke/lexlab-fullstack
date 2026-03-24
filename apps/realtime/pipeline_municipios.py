import csv, psycopg2, os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
CSV_PATH = os.path.join(BASE_DIR, "web", "public", "populacao_estimada_completa_spline.csv")

print("📂 CSV:", CSV_PATH)

if not os.path.exists(CSV_PATH):
    print("❌ arquivo NÃO encontrado")
    exit()

# ================= DB =================
conn = psycopg2.connect(
    host="localhost",
    port=5433,
    user="postgres",
    password="lexlab",
    dbname="lexlab"
)
cur = conn.cursor()

cur.execute("""
CREATE TABLE IF NOT EXISTS municipios (
  cod_ibge TEXT PRIMARY KEY,
  nome TEXT,
  uf TEXT,
  populacao INT
);
""")

municipios = {}

with open(CSV_PATH, encoding="utf-8-sig") as f:
    reader = csv.DictReader(f, delimiter=';')

    # 🔥 limpa headers (remove BOM e espaços)
    reader.fieldnames = [h.strip().replace("\ufeff","") for h in reader.fieldnames]

    print("📊 headers detectados:", reader.fieldnames)

    for row in reader:

        # 🔥 acesso seguro (independente de encoding zoado)
        cod = row.get("cod_mun_ibge_7") or row.get("cod_mun_ibge_6")

        if not cod:
            continue

        if row.get("ano") == "2024":

            municipios[cod] = (
                cod,
                row.get("municipio",""),
                row.get("UF",""),
                int(row.get("populacao",0))
            )

print("📊 municípios únicos:", len(municipios))

for m in municipios.values():
    cur.execute("""
    INSERT INTO municipios VALUES (%s,%s,%s,%s)
    ON CONFLICT (cod_ibge)
    DO UPDATE SET
      nome=EXCLUDED.nome,
      uf=EXCLUDED.uf,
      populacao=EXCLUDED.populacao
    """, m)

conn.commit()
cur.close()
conn.close()

print("🚀 municípios carregados com sucesso")
