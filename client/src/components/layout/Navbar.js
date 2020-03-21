import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { logout } from "../../actions/auth";

const Navbar = ({ auth : { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul>
            <li>
                <a onClick={logout} href="#!">
                    <i className="fas fa-sign.out-alt"></i>{' '}
                    <span className='hide-sm'>Logout</span>
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li><Link to='#!' href="profiles.html">Developers</Link></li>
            <li><Link to='/register' href="register.html">Register</Link></li>
            <li><Link to='/login' href="login.html">Login</Link></li>
        </ul>
    );

    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to='/' href="index.html"><i className="fas fa-code"></i>GitConnect</Link>
            </h1>
    { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks}</Fragment>) }
        </nav>
    )
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);