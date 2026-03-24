import os, json

base = "tmp_constituicao"
dados = []

for root,_,files in os.walk(base):
    for f in files:
        if f.endswith(".md"):
            path = os.path.join(root,f)

            with open(path,encoding="utf-8") as file:
                texto = file.read()

                for linha in texto.split("\n"):
                    linha = linha.strip()
                    if linha:
                        dados.append({"texto":linha})

with open("constituicao_raw.json","w",encoding="utf-8") as f:
    json.dump(dados,f,ensure_ascii=False,indent=2)

print("✅ RAW criado:", len(dados), "linhas")
