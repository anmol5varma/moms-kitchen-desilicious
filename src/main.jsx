import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ScreenProvider } from './context/ScreenContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScreenProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ScreenProvider>
  </StrictMode>,
)
