import { useEffect, useMemo, useState } from 'react';

export default function useMunicipios(uf) {
  const [rows, setRows] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch('/populacao_estimada_completa_spline.csv')
      .then(r => r.text())
      .then(text => {
        if (cancelled) return;

        const clean = text.replace(/^\uFEFF/, '');
        const lines = clean.split(/\r?\n/).filter(Boolean).slice(1);

        const parsed = lines.map(line => {
          const cols = line.split(';');
          return {
            municipio: cols[2],
            uf: cols[3],
          };
        }).filter(x => x.municipio && x.uf);

        setRows(parsed);
        setReady(true);
      })
      .catch(() => setReady(true));

    return () => { cancelled = true; };
  }, []);

  const ufs = useMemo(() => {
    return [...new Set(rows.map(r => r.uf))].sort();
  }, [rows]);

  const municipios = useMemo(() => {
    if (!uf) return [];
    return [...new Set(rows.filter(r => r.uf === uf).map(r => r.municipio))].sort();
  }, [rows, uf]);

  return { ready, ufs, municipios };
}
