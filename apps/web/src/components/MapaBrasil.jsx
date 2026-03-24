import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

export default function MapaBrasil(){

  const [geo,setGeo] = useState(null);
  const [info,setInfo] = useState("");

  useEffect(()=>{
    fetch("/geo/br_municipios.json")
      .then(r=>r.json())
      .then(setGeo);
  },[]);

  function onEachFeature(feature, layer){

    const cod = feature.properties.cod_ibge || feature.properties.id;

    layer.on({
      click: async ()=>{
        setInfo("🤖 Gerando...");

        const r = await fetch(
          "http://localhost:1234/ia-territorio?cod="+cod
        );

        const j = await r.json();

        setInfo(j.resposta || "Erro");
      }
    });
  }

  return (
    <div>
      <MapContainer center={[-14,-52]} zoom={4} style={{height:"600px"}}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        {geo && <GeoJSON data={geo} onEachFeature={onEachFeature}/>}
      </MapContainer>

      <div className="mt-4 bg-black p-2 text-green-400 text-sm">
        {info}
      </div>
    </div>
  );
}
