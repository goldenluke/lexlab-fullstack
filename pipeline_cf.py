import json, psycopg2

conn = psycopg2.connect(
    host="localhost",
    port=5433,
    user="postgres",
    password="lexlab",
    dbname="lexlab"
)

cur = conn.cursor()

def flatten(obj):
    txt = ""
    if isinstance(obj, dict):
        for v in obj.values():
            txt += flatten(v)
    elif isinstance(obj, list):
        for v in obj:
            txt += flatten(v)
    elif isinstance(obj, str):
        txt += obj + " "
    return txt

with open("tmp_constituicao/JSON/19881005_ORIGINAL.json", encoding="utf-8") as f:
    data = json.load(f)

texto = flatten(data)

cur.execute("""
INSERT INTO documentos (tipo,titulo,fonte,estrutura,texto_flat)
VALUES (%s,%s,%s,%s,%s)
""", (
    "CF",
    "Constituição Federal de 1988",
    "planalto",
    json.dumps(data),
    texto
))

conn.commit()
cur.close()
conn.close()

print("🚀 CF inserida")
