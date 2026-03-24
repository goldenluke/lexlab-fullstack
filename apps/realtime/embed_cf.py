import psycopg2, requests, json

conn = psycopg2.connect(
    host="localhost",
    port=5433,
    user="postgres",
    password="lexlab",
    dbname="lexlab"
)

cur = conn.cursor()

def embed(text):
    r = requests.post("http://localhost:11434/api/embeddings", json={
        "model":"nomic-embed-text",
        "prompt": text[:2000]
    })
    return r.json()["embedding"]

cur.execute("SELECT id, texto_flat FROM documentos WHERE embedding IS NULL")

rows = cur.fetchall()

for r in rows:
    id, texto = r

    print("🔄 embedding doc:", id)

    try:
        vec = embed(texto)

        cur.execute(
            "UPDATE documentos SET embedding=%s WHERE id=%s",
            (vec, id)
        )

        conn.commit()

    except Exception as e:
        print("❌ erro:", e)

cur.close()
conn.close()

print("🚀 embeddings prontos")
