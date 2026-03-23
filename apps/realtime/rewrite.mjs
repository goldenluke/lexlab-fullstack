export function rewriteText(text) {
  return text
    .replace(/Art\./g, 'Artigo')
    .concat('\n\n(versão revisada pela IA)');
}
