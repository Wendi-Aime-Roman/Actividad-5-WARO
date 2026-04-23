import './Acerca.css';
import profilePhoto from '../assets/profile.jpeg';
import { useAlumnoContext } from "../context/AlumnoContext";

function Acerca() {
  const { alumno } = useAlumnoContext();

  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Dialog flow', 'Python'];

  return (
    <div className="page-container">
      <div className="acerca-container">
        <h1>Acerca de mí</h1>

        <div className="profile-img">
          <img
            src={profilePhoto}
            alt="Foto de perfil de Wen Román"
          />
        </div>

        <div className="info-box">
          <p><strong>Nombre:</strong> {alumno.nombre}</p>
          <p><strong>Carrera:</strong> {alumno.carrera}</p>
          <p><strong>Grupo:</strong> {alumno.grupo}</p>
          <p><strong>Semestre:</strong> {alumno.semestre}</p>
        </div>

        <p>
          Soy estudiante apasionado por el desarrollo web y las nuevas tecnologías.
          Me interesa aprender y crear aplicaciones funcionales que resuelvan problemas reales.
          Trabajo constantemente en mejorar mis habilidades de programación y en mantenerse
          actualizado con las tendencias del desarrollo moderno. Disfruto colaborar en proyectos
          en equipo y compartir conocimientos con otros desarrolladores. Mi objetivo es convertirme
          en una ingeniera que pueda contribuir significativamente al mundo del software.
        </p>

        <h3>Habilidades</h3>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Acerca;