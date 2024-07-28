import { NavLink } from "react-router-dom"

const styles = {
    nav: {
        display: 'flex',
        gap: 12
    }
}

const Nav = ({ activePage, setActivePage }) => {

    const getActiveClass = ({ isActive }) => isActive ? 'active' : ''

    return (
        <nav style={styles.nav}>
            <NavLink 
                to='/' 
                className={`button ${getActiveClass}`}
            >
                About Me
            </NavLink>
            <NavLink 
                to='/portfolio' 
                className={`button ${getActiveClass}`}
            >
                Portfolio
            </NavLink>
            <NavLink 
                to='/contact' 
                className={`button ${getActiveClass}`}
            >
                Contact
            </NavLink>
            <NavLink 
                to='/resume' 
                className={`button ${getActiveClass}`}
            >
                Resume
            </NavLink>
        </nav>
    )
}

export default Nav