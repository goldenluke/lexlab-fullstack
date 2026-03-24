import pandas as pd
import json
import glob

# ================= CARREGAR CSV MAIS RECENTE =================
arquivos = sorted(glob.glob("constituicao/CSV/*.csv"))
arquivo = arquivos[-1]

print(f"📄 usando: {arquivo}")

df = pd.read_csv(arquivo, dtype=str).fillna("")

# ================= ESTRUTURA =================
tree = {}

def get(d, key):
    return d[key] if d[key] else "0"

for _, row in df.iterrows():

    t = get(row,"titulo")
    c = get(row,"capitulo")
    s = get(row,"secao")
    ss = get(row,"subsecao")
    a = get(row,"artigo")
    p = get(row,"paragrafo")
    i = get(row,"inciso")
    al = get(row,"alinea")

    texto = row["texto"]

    # ================= NAVEGAÇÃO =================
    tree.setdefault(t, {})
    tree[t].setdefault(c, {})
    tree[t][c].setdefault(s, {})
    tree[t][c][s].setdefault(ss, {})
    tree[t][c][s][ss].setdefault(a, {
        "texto": "",
        "paragrafos": {},
        "incisos": {}
    })

    artigo = tree[t][c][s][ss][a]

    # ================= ARTIGO =================
    if row["classe"] == "artigo":
        artigo["texto"] = texto

    # ================= PARÁGRAFO =================
    if p:
        artigo["paragrafos"].setdefault(p, {
            "texto": "",
            "incisos": {}
        })

        if row["classe"] == "paragrafo":
            artigo["paragrafos"][p]["texto"] = texto

        # inciso dentro do parágrafo
        if i:
            artigo["paragrafos"][p]["incisos"][i] = texto

    # ================= INCISO =================
    elif i:
        artigo["incisos"][i] = texto

# ================= SALVAR JSON =================
with open("constituicao.json","w") as f:
    json.dump(tree,f,ensure_ascii=False,indent=2)

print("🔥 CONSTITUIÇÃO GERADA EM constituicao.json")
