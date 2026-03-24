import { useEffect, useState } from 'react';
import Papa from 'papaparse';

export default function BrazilMapPlotly({ votos }){

  const [geojson,setGeojson]=useState(null);
  const [pop,setPop]=useState({});

  // geojson BR
  useEffect(()=>{
    fetch('/geojson_uf/geojs-100-mun.json')
      .then(r=>r.json())
      .then(setGeojson);
  },[]);

  // população
  useEffect(()=>{
    fetch('/populacao_estimada_completa_spline.csv')
      .then(r=>r.text())
      .then(text=>{
        const parsed = Papa.parse(text,{header:true, delimiter:';'});

        const mapa = {};

        parsed.data.forEach(r=>{
          if(Number(r.ano) === 2025){
            mapa[r.cod_mun_ibge_7] = Number(r.populacao);
          }
        });

        setPop(mapa);
      });
  },[]);

  useEffect(()=>{
    if(!geojson) return;

    (async ()=>{
      const Plotly = (await import('plotly.js-dist-min')).default;

      const locations = geojson.features.map(f=>String(f.properties.id));

      // 📊 indicador por 10k
      const z = locations.map(id=>{
        const v = votos[id] || {sim:0};
        const p = pop[id] || 1;

        return (v.sim / p) * 10000;
      });

      // 🧠 cluster simples
      const cluster = z.map(val=>{
        if(val > 50) return 3;
        if(val > 20) return 2;
        return 1;
      });

      const data = [{
        type:'choropleth',
        geojson,
        locations,
        z: cluster,
        featureidkey:'properties.id',
        colorscale:[
          [0,'#d4eac7'],
          [0.5,'#7bc96f'],
          [1,'#196127']
        ],
        colorbar:{ title:'Cluster' }
      }];

      Plotly.newPlot('mapa', data, {
        geo:{fitbounds:'locations', visible:false},
        margin:{t:0,b:0}
      });

    })();

  },[geojson, votos, pop]);

  return <div id="mapa" style={{height:'600px'}} />;
}
