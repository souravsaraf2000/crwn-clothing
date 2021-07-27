import React from 'react';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.style.scss';

import { Link } from 'react-router-dom';

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <Link to="/">
                <Logo/>
            </Link>
        </div>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header;