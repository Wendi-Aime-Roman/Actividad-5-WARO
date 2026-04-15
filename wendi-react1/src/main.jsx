import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './Global.css'
import './index.css'
import App from './App.jsx'
import { AlumnoProvider } from './components/AlumnoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AlumnoProvider>
        <App />
      </AlumnoProvider>
    </BrowserRouter>
  </StrictMode>
)