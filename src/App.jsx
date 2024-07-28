import { useState } from 'react'
import Nav from './components/nav'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import PortfolioPage from './pages/portfolio'
import ResumePage from './pages/resume'

function App() {
  const [activePage, setActivePage] = useState('about')
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Parros</h1>
      <Nav 
        activePage={activePage} 
        setActivePage={setActivePage}
    />
    {activePage === 'about' && <AboutPage/>}
    {activePage === 'contact' && <ContactPage/>}
    {activePage === 'portfolio' && <PortfolioPage/>}
    {activePage === 'resume' && <ResumePage/>}
    </>
  )
}

export default App
