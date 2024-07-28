import { useState } from 'react'
import Nav from './components/nav'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import PortfolioPage from './pages/portfolio'
import ResumePage from './pages/resume'

function App() {
  const [activePage, setActivePage] = useState('about')
  const [count, setCount] = useState(0)

  const renderActivePage = () => {
    let result = <p>No matching page found</p>
    if (activePage === 'about') {
      result = <AboutPage/>
    } else if (activePage === 'contact') {
      result = <ContactPage/>
    } else if (activePage === 'portfolio') {
      result = <PortfolioPage/>
    } else if (activePage === 'resume') {
      result = <ResumePage/>
    }
    return result
  }

  return (
    <>
    <h1>Parros</h1>
      <Nav 
        activePage={activePage} 
        setActivePage={setActivePage}
    />
    
    { renderActivePage() }
    </>
  )
}

export default App
