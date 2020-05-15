import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return(
            
            <nav className ="display">
                <ul className ="nav-links">
                    <Link to = '/'>
                    <li>Home</li>
                    </Link>
                    <Link to ='/cars'>
                    <li>Cars</li>
                    </Link>
                    <Link to = '/register'>
                    <li>Register</li>
                    </Link>
                    <Link to = '/contact'>
                    <li>Contact</li>
                    </Link>
                </ul>
            </nav>
        );
    }
};
export default Nav;