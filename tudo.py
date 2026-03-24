import os

def gerar_rastro_codigo(
    extensoes=(
        '.py', '.js', '.jsx', '.ts', '.tsx',
        '.css', '.astro', '.sh',
        '.yml', '.yaml', '.txt'
    ),
    arquivo_saida='codigo_completo.txt',
    tamanho_max_mb=2
):
    pasta_raiz = '.'
    arquivos_encontrados = 0
    arquivos_processados = set() # Evita repetições

    # Pastas de sistema e dependências (não entrar nelas)
    pastas_a_ignorar = {
        'venv', '.venv', 'env', '__pycache__', '.git',
        'node_modules', '.mypy_cache', '.pytest_cache',
        'dist', 'build', '.next', '.nuxt', '.output', 'public'
    }

    tamanho_max_bytes = tamanho_max_mb * 1024 * 1024
    caminho_saida_abs = os.path.abspath(arquivo_saida)

    print(f"🚀 Iniciando rastro LexLab em: {os.getcwd()}")

    with open(arquivo_saida, 'w', encoding='utf-8') as outfile:
        for pasta_atual, subpastas, arquivos in os.walk(pasta_raiz):

            # 🔥 CORREÇÃO: Poda real das subpastas
            # Isso impede o os.walk de entrar em pastas como node_modules
            subpastas[:] = [d for d in subpastas if d not in pastas_a_ignorar and not d.startswith('.')]

            for arquivo in arquivos:
                if not arquivo.endswith(extensoes):
                    continue

                caminho_completo = os.path.join(pasta_atual, arquivo)
                caminho_abs = os.path.abspath(caminho_completo)
                caminho_rel = os.path.relpath(caminho_abs, pasta_raiz)

                # 🚫 Evita processar o próprio arquivo de saída ou duplicados
                if caminho_abs == caminho_saida_abs or caminho_abs in arquivos_processados:
                    continue

                # 🚫 Filtro de tamanho
                try:
                    if os.path.getsize(caminho_completo) > tamanho_max_bytes:
                        print(f"⏩ Pulando (Grande): {caminho_rel}")
                        continue
                except OSError:
                    continue

                print(f"📄 Adicionando rastro: {caminho_rel}")

                outfile.write(f"\n{'='*80}\n")
                outfile.write(f"ARQUIVO: {caminho_rel}\n")
                outfile.write(f"{'='*80}\n\n")

                try:
                    with open(caminho_completo, 'r', encoding='utf-8', errors='ignore') as f:
                        outfile.write(f.read())
                    arquivos_encontrados += 1
                    arquivos_processados.add(caminho_abs)
                except Exception as e:
                    outfile.write(f"\n[ERRO DE LEITURA]: {e}\n")

    print(f"\n✨ Rastro concluído! {arquivos_encontrados} arquivos consolidados em {arquivo_saida}")

if __name__ == "__main__":
    gerar_rastro_codigo()
