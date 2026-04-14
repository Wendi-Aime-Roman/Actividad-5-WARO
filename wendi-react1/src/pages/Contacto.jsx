import './Contacto.css';

function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado');
  };

  return (
    <div className="page-container">
      <div className="contacto-container">
        <h1>Contacto</h1>
        
        <p>Si deseas ponerte en contacto conmigo, puedes hacerlo a través de los siguientes medios.</p>
        
        <div className="contact-section">
          <h3>Información de Contacto</h3>
          <ul>
            <li><strong>Email:</strong> Aimeromanw27@gmail.com</li>
            <li><strong>Teléfono:</strong> +52 669-222-9739</li>
            <li><strong>Ubicación:</strong> Mazatlán, Sinaloa, México.</li>
          </ul>
        </div>

        <div className="contact-section">
          <h3>Envíame un mensaje</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" placeholder="Tu nombre completo" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="tu@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="asunto">Asunto</label>
              <input type="text" id="asunto" placeholder="Asunto del mensaje" required />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" placeholder="Tu mensaje aquí" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
