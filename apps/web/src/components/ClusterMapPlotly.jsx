import { useEffect, useState } from 'react';

const CLUSTER_LABELS = {
  0: { label: "Vulnerável", color: "#d62728" },
  1: { label: "Intermediário", color: "#ffbf00" },
  2: { label: "Alta adesão", color: "#2ca02c" }
};

export default function ClusterMapPlotly(){

  const [geo,setGeo]=useState(null);
  const [data,setData]=useState({});

  useEffect(()=>{

    fetch('/geojson_uf/geojs-100-mun.json')
      .then(r=>r.json())
      .then(setGeo);

    fetch('http://localhost:1234/cluster/1')
      .then(r=>r.json())
      .then(setData);

  },[]);

  useEffect(()=>{

    if(!geo || !window.Plotly || !data.clusters) return;

    const locations = [];
    const z = [];
    const text = [];

    geo.features.forEach(f=>{
      const cod = f.properties.cod_ibge || f.id;
      const nome = f.properties.name || "Município";

      const cluster = data.clusters[cod] ?? -1;
      const info = data.indicador?.[cod] || {};

      locations.push(cod);
      z.push(cluster);

      text.push(`
        <b>${nome}</b><br/>
        Cluster: ${CLUSTER_LABELS[cluster]?.label || "N/A"}<br/>
        Taxa: ${(info.taxa || 0).toFixed(2)}<br/>
        População: ${info.pop || 0}
      `);
    });

    const colorscale = [
      [0, '#d62728'],
      [0.5, '#ffbf00'],
      [1, '#2ca02c']
    ];

    window.Plotly.newPlot('map', [{
      type: 'choropleth',
      geojson: geo,
      locations: locations,
      z: z,
      text: text,
      hoverinfo: 'text',
      featureidkey: "properties.cod_ibge",
      colorscale: colorscale,
      marker: { line:{ width:0.2, color:'#333' } }
    }], {
      geo: {
        scope: 'south america',
        projection: { type: 'mercator' },
        showland: true,
        fitbounds: "locations"
      },
      margin: { t:0, b:0 },

      annotations: [
        {
          x: 0.02,
          y: 0.98,
          xref: 'paper',
          yref: 'paper',
          text: `
            <b>Legenda</b><br>
            🔴 Vulnerável<br>
            🟡 Intermediário<br>
            🟢 Alta adesão
          `,
          showarrow: false,
          align: 'left',
          bgcolor: 'rgba(0,0,0,0.6)',
          font: { color: 'white' }
        }
      ]
    });

  },[geo,data]);

  return (
    <div>
      <h2>🗺️ Mapa Inteligente</h2>
      <div id="map" style={{height:'650px'}}></div>
    </div>
  );
}
