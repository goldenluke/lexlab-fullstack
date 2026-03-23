export async function suggest(text) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Sugestão IA:\n\n" + text.slice(0, 200));
    }, 500);
  });
}
