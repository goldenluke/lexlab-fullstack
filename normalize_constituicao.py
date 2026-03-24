import json, os

input_file = "tmp_constituicao/JSON/19881005_ORIGINAL.json"
output_file = "apps/web/public/constituicao.json"

with open(input_file, encoding="utf-8") as f:
    data = json.load(f)


def txt(v):
    if isinstance(v, list):
        return v[0]
    return v or ""


def parse_artigo(av):
    return {
        "numero": av.get("numero",""),
        "texto": txt(av.get("texto")),
        "paragrafos": [
            {
                "numero": p.get("numero",""),
                "texto": txt(p.get("texto")),
                "incisos": [
                    {
                        "numero": i.get("numero",""),
                        "texto": txt(i.get("texto"))
                    }
                    for i in (p.get("incisos") or {}).values()
                ]
            }
            for p in (av.get("paragrafos") or {}).values()
        ],
        "incisos": [
            {
                "numero": i.get("numero",""),
                "texto": txt(i.get("texto"))
            }
            for i in (av.get("incisos") or {}).values()
        ]
    }


estrutura = [{
    "titulo": "Constituição Federal de 1988",
    "capitulos": []
}]

capitulos = []

for key, val in data.items():

    if val.get("classe") == "capitulo":

        cap_obj = {
            "titulo": txt(val.get("texto")),
            "artigos": []
        }

        for ak, av in (val.get("artigos") or {}).items():
            cap_obj["artigos"].append(parse_artigo(av))

        capitulos.append(cap_obj)


# se não achou capítulos → fallback (varrer tudo)
if not capitulos:
    print("⚠️ fallback total ativado")

    cap_obj = {
        "titulo": "Artigos",
        "artigos": []
    }

    for key, val in data.items():
        if val.get("classe") == "artigo":
            cap_obj["artigos"].append(parse_artigo(val))

    capitulos.append(cap_obj)


estrutura[0]["capitulos"] = capitulos


# salvar
os.makedirs("apps/web/public", exist_ok=True)

with open(output_file,"w",encoding="utf-8") as f:
    json.dump(estrutura,f,indent=2,ensure_ascii=False)


print("🚀 Constituição construída!")
print("📊 capítulos:", len(capitulos))
print("📊 artigos total:", sum(len(c["artigos"]) for c in capitulos))
