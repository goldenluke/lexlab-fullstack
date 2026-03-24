import os, json, re

base = "tmp_constituicao"
estrutura = []

titulo = None
capitulo = None
artigo = None

def clean(l):
    return l.strip().replace('\xa0',' ')

for root,_,files in os.walk(base):
    for f in sorted(files):
        if not f.endswith(".md"):
            continue

        path = os.path.join(root,f)

        with open(path,encoding="utf-8") as file:
            for linha in file:
                linha = clean(linha)

                if not linha:
                    continue

                # ================= TÍTULO =================
                if linha.startswith("# "):
                    titulo = {
                        "titulo": linha.replace("# ",""),
                        "capitulos":[]
                    }
                    estrutura.append(titulo)
                    continue

                # ================= CAPÍTULO =================
                if linha.startswith("## "):
                    capitulo = {
                        "titulo": linha.replace("## ",""),
                        "artigos":[]
                    }
                    if titulo:
                        titulo["capitulos"].append(capitulo)
                    continue

                # ================= ARTIGO =================
                if linha.startswith("### Art."):
                    artigo = {
                        "numero": re.findall(r'Art\. ?\d+º?', linha)[0],
                        "texto": "",
                        "incisos": [],
                        "paragrafos": []
                    }
                    if capitulo:
                        capitulo["artigos"].append(artigo)
                    continue

                # ================= TEXTO DO ARTIGO =================
                if artigo and not linha.startswith("#"):
                    artigo["texto"] += " " + linha

                # ================= INCISO =================
                m = re.match(r'^([IVXLCDM]+)\s*-\s*(.*)', linha)
                if m and artigo:
                    artigo["incisos"].append(f"{m.group(1)} - {m.group(2)}")

                # ================= PARÁGRAFO =================
                if linha.startswith("§") and artigo:
                    artigo["paragrafos"].append({
                        "texto": linha,
                        "incisos":[]
                    })

# salvar
out = "apps/web/public/constituicao.json"
with open(out,"w",encoding="utf-8") as f:
    json.dump(estrutura,f,indent=2,ensure_ascii=False)

print("✅ Constituição gerada:", len(estrutura), "títulos")
