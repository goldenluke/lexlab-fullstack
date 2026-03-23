import { diffWords } from 'diff';

export function generateDiff(oldText, newText) {
  const diff = diffWords(oldText, newText);

  return diff.map(part => {
    if (part.added) {
      return `<span style="background:#d4fcbc;">${part.value}</span>`;
    }
    if (part.removed) {
      return `<span style="background:#fbb6c2;text-decoration:line-through;">${part.value}</span>`;
    }
    return part.value;
  }).join('');
}
