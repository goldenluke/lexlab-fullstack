import json

# caminho do JSON original
input_file = "tmp_constituicao/JSON/19881005_ORIGINAL.json"
output_file = "apps/web/public/constituicao.json"

with open(input_file, encoding="utf-8") as f:
    data = json.load(f)

# salvar direto (já está estruturado!)
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("✅ Constituição carregada:", len(data))
