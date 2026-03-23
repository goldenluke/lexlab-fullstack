import { useEffect, useState } from 'react';

export default function PlotWrapper(props){
  const [Plot,setPlot]=useState(null);

  useEffect(()=>{
    import('react-plotly.js').then(mod=>{
      setPlot(()=>mod.default);
    });
  },[]);

  if(!Plot) return <div>Carregando gráfico...</div>;

  return <Plot {...props} />;
}
