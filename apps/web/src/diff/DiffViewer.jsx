export default function DiffViewer({ oldText = "", newText = "" }) {

  function diffLines(oldStr, newStr) {
    const oldLines = oldStr.split("\n");
    const newLines = newStr.split("\n");

    return newLines.map((line, i) => {
      if (oldLines[i] !== line) {
        return `<div style="background:#d1fae5;padding:2px">${line}</div>`;
      }
      return `<div>${line}</div>`;
    }).join("");
  }

  return (
    <div className="border rounded-xl p-4 text-sm font-mono">

      <div className="font-bold mb-2">Diff</div>

      <div
        dangerouslySetInnerHTML={{
          __html: diffLines(oldText, newText)
        }}
      />

    </div>
  );
}
