import { useAlumnoContext } from "../context/AlumnoContext";

function PerfilResumen() {
  const { alumno } = useAlumnoContext();

  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      border: '2px solid #667eea',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px 0',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#333', marginBottom: '10px' }}>Resumen del perfil</h2>
      <p style={{ color: '#222', fontSize: '16px', fontWeight: '500' }}>
        {alumno.nombre} - {alumno.carrera}
      </p>
    </div>
  );
}

export default PerfilResumen;
