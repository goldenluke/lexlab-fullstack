import os
from ftfy import fix_text

EXTS = ('.js','.jsx','.ts','.tsx','.astro','.md')

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(EXTS):
            path = os.path.join(root, file)

            try:
                with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()

                fixed = fix_text(content)

                if fixed != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(fixed)
                    print("✔ corrigido:", path)

            except Exception as e:
                print("erro:", path, e)

print("🔥 FINALIZADO")
