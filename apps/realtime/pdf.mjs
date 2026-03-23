import PDFDocument from 'pdfkit';

function formatLaw(text){
  return text.replace(/Art\./g, '\nArt.').replace(/§/g, '\n§');
}

export function generatePDF(res, text, number="001/2026") {

  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 80, bottom: 80, left: 70, right: 70 }
  });

  res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment; filename=projeto_de_lei.pdf'
  });

  doc.pipe(res);

  // CAPA
  doc.fontSize(14).font('Helvetica-Bold')
     .text('CÂMARA DOS DEPUTADOS', { align: 'center' });

  doc.moveDown(0.5);

  doc.fontSize(12)
     .text(`MINUTA Nº ${number}`, { align: 'center' });

  doc.moveDown(2);

  doc.fontSize(12).font('Helvetica')
     .text('Dispõe sobre a organização de serviços e direitos no âmbito da saúde.', {
       align: 'center'
     });

  doc.addPage();

  // TEXTO
  doc.fontSize(11)
     .font('Times-Roman')
     .text(formatLaw(text), {
       align: 'justify',
       lineGap: 4
     });

  doc.moveDown(2);

  doc.fontSize(10)
     .text('Gerado pelo LexLab', { align: 'center' });

  doc.end();
}
