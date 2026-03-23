import { fetchWithAuth } from '@lib/auth.js';

export default function PDFExport({ editor }) {

  async function exportPDF(){
    const text = editor.getText();

    const res = await  fetchWithAuth('/export/pdf',{
      method:'POST',
      body: JSON.stringify({text})
    });

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'lei.pdf';
    a.click();
  }

  return (
    <button onClick={exportPDF} className="btn btn-secondary">
      📜 Exportar PDF
    </button>
  );
}
