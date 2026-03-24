import { useEffect } from 'react';

export default function PlotlyLoader(){

  useEffect(()=>{
    if(!window.Plotly){
      const script = document.createElement('script');
      script.src = "https://cdn.plot.ly/plotly-2.30.0.min.js";
      script.onload = ()=>console.log("Plotly carregado");
      document.body.appendChild(script);
    }
  },[]);

  return null;
}
