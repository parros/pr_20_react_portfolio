import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutPage from './pages/about.jsx'
import ContactPage from './pages/contact.jsx'
import PortfolioPage from './pages/portfolio.jsx'
import ResumePage from './pages/resume.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <AboutPage />
      },
      {
        path: '',
        element: <ContactPage />
      },
      {
        path: '',
        element: <PortfolioPage />
      },
      {
        path: '',
        element: <ResumePage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
