import { NavLink } from 'react-router-dom'

import './Navigation.css'

function Navigation() {
    return (
        <nav className="LinkField">
            <NavLink className="Link" to="/">
                <span>Login</span>
            </NavLink>
            <NavLink className="Link" to="/about">
                <span>About</span>
            </NavLink>
            <NavLink className="Link" to="/order">
                <span>Order</span>
            </NavLink>
        </nav>
    )
}

export default Navigation
