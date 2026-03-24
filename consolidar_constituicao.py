import json, os, re

base = "tmp_constituicao/JSON"
arquivos = sorted(os.listdir(base))

def extrair_num_artigo(art):
    if isinstance(art, dict):
        txt = art.get("numero","") + art.get("texto","")
    else:
        txt = str(art)

    m = re.search(r'Art\. ?(\d+)', txt)
    return int(m.group(1)) if m else None


def normalizar(data):
    """
    garante formato padrão:
    [ {titulo, capitulos:[{artigos:[]}] } ]
    """

    # caso 1: já está certo
    if isinstance(data, list) and isinstance(data[0], dict):
        return data

    # caso 2: objeto único
    if isinstance(data, dict):
        return [data]

    # caso 3: lista de strings → virar artigos
    if isinstance(data, list) and isinstance(data[0], str):
        return [{
            "titulo":"CF/88",
            "capitulos":[{
                "titulo":"Geral",
                "artigos":[{"numero":"", "texto":t} for t in data]
            }]
        }]

    return []


# ================= ORIGINAL =================
with open(f"{base}/19881005_ORIGINAL.json", encoding="utf-8") as f:
    base_cf = normalizar(json.load(f))

index = {}

# indexar artigos
for titulo in base_cf:
    for cap in titulo.get("capitulos",[]):
        for art in cap.get("artigos",[]):
            n = extrair_num_artigo(art)
            if n:
                index[n] = art


# ================= EMENDAS =================
for file in arquivos:
    if "ORIGINAL" in file:
        continue

    caminho = f"{base}/{file}"

    try:
        with open(caminho, encoding="utf-8") as f:
            data = normalizar(json.load(f))

        for titulo in data:
            for cap in titulo.get("capitulos",[]):
                for art in cap.get("artigos",[]):
                    n = extrair_num_artigo(art)
                    if n:
                        index[n] = art

        print("✔ aplicada:", file)

    except Exception as e:
        print("❌ erro:", file, e)


# ================= RECONSTRUIR =================
nova = []

for titulo in base_cf:
    novo_titulo = {
        "titulo": titulo.get("titulo",""),
        "capitulos":[]
    }

    for cap in titulo.get("capitulos",[]):
        novo_cap = {
            "titulo": cap.get("titulo",""),
            "artigos":[]
        }

        for art in cap.get("artigos",[]):
            n = extrair_num_artigo(art)
            if n in index:
                novo_cap["artigos"].append(index[n])

        novo_titulo["capitulos"].append(novo_cap)

    nova.append(novo_titulo)


# ================= SALVAR =================
os.makedirs("apps/web/public", exist_ok=True)

with open("apps/web/public/constituicao.json","w",encoding="utf-8") as f:
    json.dump(nova,f,indent=2,ensure_ascii=False)

print("🚀 Constituição consolidada pronta!")
