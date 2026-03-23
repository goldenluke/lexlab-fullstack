export default function DiffViewer({ oldText = "", newText = "" }) {

  function diff(oldStr, newStr) {

    const oldWords = oldStr.split(" ");
    const newWords = newStr.split(" ");

    return newWords.map((word, i) => {
      if (oldWords[i] !== word) {
        return `<span style="background:#d1fae5">${word}</span>`;
      }
      return word;
    }).join(" ");
  }

  return (
    <div className="p-4 bg-white dark:bg-gray-900 border rounded-xl">

      <div className="font-bold mb-2">Diff</div>

      <div
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{
          __html: diff(oldText, newText)
        }}
      />

    </div>
  );
}
