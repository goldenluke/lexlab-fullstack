import { useEffect, useState } from 'react';

export default function usePopulation() {

  const [rows, setRows] = useState([]);
  const [latestYear, setLatestYear] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {

    async function load() {

      const r = await fetch('/populacao_estimada_completa_spline.csv');
      const text = await r.text();

      const clean = text.replace(/^\uFEFF/, '');
      const lines = clean.split('\n').slice(1);

      const data = [];

      for (let line of lines) {

        const c = line.split(';');

        if (!c[2] || !c[3]) continue;

        data.push({
          municipio: c[2],
          uf: c[3],
          ano: Number(c[4]),
          populacao: Number(c[5])
        });
      }

      let maxYear = 0;

      for (let r of data) {
        if (r.ano > maxYear) maxYear = r.ano;
      }

      setRows(data);
      setLatestYear(maxYear);
      setReady(true);
    }

    load();

  }, []);

  function getMunicipalityPopulation(uf, municipio) {

    if (!uf || !municipio || !latestYear) return 0;

    for (let r of rows) {
      if (
        r.uf === uf &&
        r.municipio === municipio &&
        r.ano === latestYear
      ) {
        return r.populacao || 0;
      }
    }

    return 0;
  }

  function getStatePopulation(uf) {

    if (!uf || !latestYear) return 0;

    let total = 0;

    for (let r of rows) {
      if (r.uf === uf && r.ano === latestYear) {
        total += r.populacao || 0;
      }
    }

    return total;
  }

  return {
    ready,
    latestYear,
    getMunicipalityPopulation,
    getStatePopulation
  };
}
