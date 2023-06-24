import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Navbar.css'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './Productpage.css'
import { BrowserRouter } from 'react-router-dom'
import { Context } from './Context/Context'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Context>
    <App/>
    </Context>
    </BrowserRouter>
  </React.StrictMode>,
)
