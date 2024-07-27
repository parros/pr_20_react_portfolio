const styles = {
    nav: {
        display: 'flex',
        gap: 12
    }
}

const Nav = ({ activePage, setActivePage }) => {

    const getActiveBg = (slug) => {

    }

    return (
        <nav style={styles.nav}>
            <button style={{
                backgroundColor: getActiveBg('home')
            }}>
                Home
            </button>
            <button style={{
                backgroundColor: getActiveBg('about')
            }}>
                About Me
            </button>
            <button style={{
                backgroundColor: getActiveBg('portfolio')
            }}>
                Portfolio
            </button>
            <button style={{
                backgroundColor: getActiveBg('contact')
            }}>
                Contact
            </button>
            <button style={{
                backgroundColor: getActiveBg('resume')
            }}>
                Resume
            </button>
        </nav>
    )
}

export default Nav