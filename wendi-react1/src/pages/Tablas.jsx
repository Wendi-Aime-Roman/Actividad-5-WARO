import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import BasicTable from '../Tabla';
import heroImg from '../assets/hero.png'
import '../App.css'
import './Tablas.css'

function Tablas() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1)
    } else {
      alert("El valor no puede ser mayor a 10")
    }
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="page-container">
      <div className="tablas-container">
        <h1>Página de Tablas y Contador</h1>

        <div className="contador-section">
          <h2>Contador Interactivo</h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>
            <img src={heroImg} style={{ width: '100px', height: 'auto' }} alt="Hero" />
            <img src={reactLogo} style={{ width: '100px', height: 'auto' }} alt="React logo" />
            <img src={viteLogo} style={{ width: '100px', height: 'auto' }} alt="Vite logo" />
          </div>

          <div className="contador-display">{count}</div>

          <div className="contador-buttons">
            <button
              className="contador-btn"
              onClick={handleIncrement}
            >
              ➕ Incrementar
            </button>

            <button
              className="contador-btn"
              onClick={handleDecrement}
            >
              ➖ Decrementar
            </button>
          </div>

          <p style={{ marginTop: '20px', color: '#666', fontSize: '14px' }}>
            El valor máximo permitido es 10
          </p>
        </div>

        <div className="tabla-section">
          <h2>Tabla de Datos</h2>
          <BasicTable />
        </div>

        <div className="docs-section">
          <h2>Documentación y Recursos</h2>
          <div className="docs-grid">
            <div className="doc-card">
              <h3>Vite</h3>
              <p>Herramienta de compilación rápida y moderna para aplicaciones web.</p>
              <a href="https://vitejs.dev/guide/" target="_blank" rel="noopener noreferrer">
                Ver Documentación →
              </a>
            </div>

            <div className="doc-card">
              <h3>React</h3>
              <p>Biblioteca JavaScript para crear interfaces de usuario con componentes.</p>
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                Ver Documentación →
              </a>
            </div>

            <div className="doc-card">
              <h3>React Router</h3>
              <p>Sistema de enrutamiento para aplicaciones React con múltiples páginas.</p>
              <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer">
                Ver Documentación →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tablas;
