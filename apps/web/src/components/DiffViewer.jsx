import { diffWords } from 'diff';

export default function DiffViewer({ oldText, newText }) {

  const diff = diffWords(oldText || '', newText || '');

  return (
    <div className="border p-2 text-sm whitespace-pre-wrap">
      {diff.map((part, i) => (
        <span key={i}
          style={{
            backgroundColor: part.added ? '#a6f3a6' :
                             part.removed ? '#f3a6a6' : 'transparent'
          }}>
          {part.value}
        </span>
      ))}
    </div>
  );
}
