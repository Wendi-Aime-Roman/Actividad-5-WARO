import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // useEffect para controlar límites
  useEffect(() => {
    if (count > 10) {
      alert("El valor no puede ser mayor a 10")
      setCount(10)
    }

    if (count < 0) {
      setCount(0)
    }
  }, [count])

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>Contador</h1>
          <h2>{count}</h2>
        </div>

        <button
          className="counter"
          onClick={() => setCount(count + 1)}
        >
          Incrementar
        </button>

        <button
          className="counter"
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
        >
          Decrementar
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vitejs.dev/guide/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Vite Docs
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="logo" src={reactLogo} alt="" />
                React Docs
              </a>
            </li>
          </ul>
        </div>

        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Community</h2>
          <p>Join our community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://discord.gg/frametimedev" target="_blank">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App