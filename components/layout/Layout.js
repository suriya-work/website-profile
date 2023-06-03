import Navbar from "../Navbar"
const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div style={{ height: 'auto' }}>{children}</div>
        </div>
    )
}

export default Layout
