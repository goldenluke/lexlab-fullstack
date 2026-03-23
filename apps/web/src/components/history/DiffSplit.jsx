export default function DiffSplit({ oldText = "", newText = "" }) {

  const oldLines = oldText.split("\n");
  const newLines = newText.split("\n");

  return (
    <div className="grid grid-cols-2 gap-2 text-sm font-mono">

      <div className="bg-red-50 p-2 rounded">
        {oldLines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>

      <div className="bg-green-50 p-2 rounded">
        {newLines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>

    </div>
  );
}
