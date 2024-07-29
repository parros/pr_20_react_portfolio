import { Outlet } from 'react-router-dom'
import Nav from './components/nav'

function App() {
  return (
    <>
    <h1 id='header'>Parros</h1>
      <Nav />
      <Outlet />

    </>
  )
}

export default App
