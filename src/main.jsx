import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ItemProvider } from './contexts/ItemContext.jsx'
import { SidebarProvider } from './contexts/SidebarContext.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <SidebarProvider>
      <CartProvider>
        <ItemProvider> 
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </ItemProvider>
      </CartProvider>
    </SidebarProvider>
  </AuthContextProvider>
)
