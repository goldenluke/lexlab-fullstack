export function parseLaw(html) {
  const regex = /Art\.\s?\d+º[\s\S]*?(?=Art\.|$)/g;
  const matches = html.match(regex) || [];

  return matches.map((text, i) => ({
    id: i,
    title: text.split('\n')[0],
    content: text
  }));
}
