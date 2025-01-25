import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css';

import React from 'react';
import App from './App.jsx'
import './app.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
