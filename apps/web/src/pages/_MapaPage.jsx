import MapaBrasil from "../components/MapaBrasil";

export default function MapaPage(){
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">
        🗺️ Mapa Inteligente do Brasil
      </h1>

      <MapaBrasil />
    </div>
  );
}
