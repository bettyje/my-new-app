import React from 'react'
import { createRoot } from 'react-dom/client' // Import createRoot
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './App.css'

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
