import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import { UserProvider } from './contexts/user.context'
import { CategoriesProvider } from './contexts/categories.context'
import { CartProvider } from './contexts/cart.context'

import './index.scss'


const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
