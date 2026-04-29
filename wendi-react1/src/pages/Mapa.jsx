import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';
import '../pages/Mapa.css';

const containerStyle = {
  width: '100%',
  height: '600px',
  borderRadius: '8px',
  marginTop: '20px'
};

const center = {
  lat: 23.2494,
  lng: -106.4111
};

function Mapa() {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  return (
    <div className="mapa-container">
      <h1>Mapa de Mazatlán</h1>
      <p>Explora la ubicación en el mapa. Haz clic en el marcador para más información.</p>
      
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          
          <Marker 
            position={center} 
            onClick={() => setMostrarInfo(true)}
            title="Mazatlán, Sinaloa"
          />

          {mostrarInfo && (
            <InfoWindow 
              position={center} 
              onCloseClick={() => setMostrarInfo(false)}
            >
              <div style={{ 
                padding: '10px', 
                fontSize: '14px',
                maxWidth: '200px'
              }}>
                <h3 style={{ margin: '0 0 10px 0' }}>📍 Mazatlán</h3>
                <p style={{ margin: '5px 0' }}><strong>Ciudad:</strong> Mazatlán, Sinaloa</p>
                <p style={{ margin: '5px 0' }}><strong>Latitud:</strong> 23.2494°</p>
                <p style={{ margin: '5px 0' }}><strong>Longitud:</strong> -106.4111°</p>
                <p style={{ margin: '5px 0', color: '#666' }}>Ubicación de ejemplo con Google Maps</p>
              </div>
            </InfoWindow>
          )}

        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Mapa;
