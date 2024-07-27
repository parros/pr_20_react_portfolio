import { useState } from 'react'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('home')
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Parros</h1>
      <Nav activePage={activePage} 
      setActivePage={setActivePage}
    />
    </>
  )
}

export default App
