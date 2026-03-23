export function parseLaw(text) {
  const structure = {};
  let currentArt = null;
  let currentPar = null;
  let currentInc = null;

  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);

  for (const line of lines) {
    // Artigo
    const artMatch = line.match(/^Art\. ?\d+º?/);
    if (artMatch) {
      currentArt = artMatch[0];
      structure[currentArt] = {
        caput: line.replace(artMatch[0], '').trim(),
        paragrafos: {}
      };
      currentPar = null;
      currentInc = null;
      continue;
    }

    // Parágrafo
    const parMatch = line.match(/^§ ?\d+º?/);
    if (parMatch && currentArt) {
      currentPar = parMatch[0];
      structure[currentArt].paragrafos[currentPar] = {
        text: line.replace(parMatch[0], '').trim(),
        incisos: {}
      };
      currentInc = null;
      continue;
    }

    // Inciso
    const incMatch = line.match(/^[IVXLCDM]+ ?-/);
    if (incMatch && currentPar && currentArt) {
      currentInc = incMatch[0].replace('-', '').trim();
      structure[currentArt].paragrafos[currentPar].incisos[currentInc] = {
        text: line.replace(incMatch[0], '').trim(),
        alineas: {}
      };
      continue;
    }

    // Alínea
    const aliMatch = line.match(/^[a-z]\)/);
    if (aliMatch && currentInc && currentPar && currentArt) {
      const letra = aliMatch[0].replace(')', '');
      structure[currentArt]
        .paragrafos[currentPar]
        .incisos[currentInc]
        .alineas[letra] = line.replace(aliMatch[0], '').trim();
      continue;
    }

    // Continuação de texto
    if (currentInc) {
      structure[currentArt]
        .paragrafos[currentPar]
        .incisos[currentInc].text += ' ' + line;
    } else if (currentPar) {
      structure[currentArt]
        .paragrafos[currentPar].text += ' ' + line;
    } else if (currentArt) {
      structure[currentArt].caput += ' ' + line;
    }
  }

  return structure;
}
