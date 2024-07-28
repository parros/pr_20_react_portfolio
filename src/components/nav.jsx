const styles = {
    nav: {
        display: 'flex',
        gap: 12
    }
}

const Nav = ({ activePage, setActivePage }) => {

    const getActiveBg = (label) => {
        return activePage === label ? 'royalblue' : 'initial'
    }

    return (
        <nav style={styles.nav}>
            <button 
                onClick={() => setActivePage('about')}
                style={{
                    backgroundColor: getActiveBg('about')
            }}>
                About Me
            </button>
            <button 
                onClick={() => setActivePage('portfolio')}
                style={{
                    backgroundColor: getActiveBg('portfolio')
            }}>
                Portfolio
            </button>
            <button 
                onClick={() => setActivePage('contact')}
                style={{
                    backgroundColor: getActiveBg('contact')
            }}>
                Contact
            </button>
            <button 
                onClick={() => setActivePage('resume')}
                style={{
                    backgroundColor: getActiveBg('resume')
            }}>
                Resume
            </button>
        </nav>
    )
}

export default Nav