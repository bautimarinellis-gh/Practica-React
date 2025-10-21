import { NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h2 className="navbar-logo">Mi App</h2>
                <ul className="navbar-menu">
                    <li>
                        <NavLink to="/" className="navbar-link">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/players" className="navbar-link">Jugadores</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard" className="navbar-link">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin" className="navbar-link">Admin</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

