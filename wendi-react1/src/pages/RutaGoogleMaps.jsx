import { useState } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";
import './RutaGoogleMaps.css';

// Dirección de inicio
const origenDireccion = "Facultad de Informática Mazatlán, Mazatlán, Sin.";

// Dirección de destino
const destinoDireccion = "Plazuela Machado, Mazatlán, Sin.";

// Coordenadas correctas para Facultad de Informática Mazatlán
const origen = {
  lat: 23.2314853147461,
  lng: -106.42635964292455,
};

// Estilo del mapa
const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "8px",
  marginTop: "20px",
};

export default function RutaGoogleMaps() {
  const [directions, setDirections] = useState(null);
  const [loading, setLoading] = useState(false);
  const [travelMode, setTravelMode] = useState(window?.google?.maps?.TravelMode?.DRIVING || 'DRIVING');

  // Carga de la API de Google Maps
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  // Función para calcular la ruta
  const calcularRuta = () => {
    if (!window.google) {
      console.error("Google Maps API no cargada");
      return;
    }

    setLoading(true);
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: origenDireccion,
        destination: destinoDireccion,
        travelMode: travelMode,
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        } else {
          console.error("Error al calcular la ruta:", status);
          alert("No se pudo calcular la ruta. Intenta de nuevo.");
        }
        setLoading(false);
      }
    );
  };

  // Mientras carga el mapa
  if (!isLoaded) return <div className="ruta-container"><p>Cargando mapa...</p></div>;

  return (
    <div className="ruta-container">
      <h1>🗺️ Ruta de Facultad de Informática a Plazuela Machado</h1>

      <p>
        Esta vista muestra una ruta desde la Facultad de Informática Mazatlán hasta la Plazuela Machado.
        Selecciona el tipo de transporte y haz clic en el botón para calcular la ruta.
      </p>

      {/* Controles */}
      <div className="controles">
        <select 
          value={travelMode} 
          onChange={(e) => setTravelMode(e.target.value)}
          className="select-transporte"
        >
          <option value="DRIVING">🚗 Conducción</option>
          <option value="WALKING">🚶 A pie</option>
          <option value="BICYCLING">🚴 En bicicleta</option>
        </select>

        <button 
          onClick={calcularRuta}
          disabled={loading}
          className="btn-calcular"
        >
          {loading ? "Calculando..." : "Calcular ruta"}
        </button>
      </div>

      {/* Mapa */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={origen}
        zoom={13}
      >
        {/* Render de la ruta */}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>

      {/* Información de la ruta */}
      {directions && directions.routes && directions.routes[0] && (
        <div className="info-ruta">
          <h3>Detalles de la ruta</h3>
          <p><strong>Distancia:</strong> {directions.routes[0].legs[0].distance.text}</p>
          <p><strong>Tiempo estimado:</strong> {directions.routes[0].legs[0].duration.text}</p>
          <p><strong>Desde:</strong> {directions.routes[0].legs[0].start_address}</p>
          <p><strong>Hasta:</strong> {directions.routes[0].legs[0].end_address}</p>
        </div>
      )}
    </div>
  );
}
