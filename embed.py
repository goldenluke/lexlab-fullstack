import psycopg2, requests

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

for id, texto in cur.fetchall():
    print("🔄", id)
    vec = embed(texto)
    cur.execute("UPDATE documentos SET embedding=%s WHERE id=%s",(vec,id))
    conn.commit()

cur.close()
conn.close()

print("🚀 embeddings OK")
