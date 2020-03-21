import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to='/' href="index.html"><i className="fas fa-code"></i>GitConnect</Link>
            </h1>
            <ul>
                <li><Link to='!#' href="profiles.html">Developers</Link></li>
                <li><Link to='/register' href="register.html">Register</Link></li>
                <li><Link to='/login' href="login.html">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar