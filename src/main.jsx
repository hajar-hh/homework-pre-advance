import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Appp from './Pokedex/App.jsx'
import Apppp from './CustomerInformation/app.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Appp />

    <div>
    <Apppp />
    </div>
  </StrictMode>,
)
