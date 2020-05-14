import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return(
            <nav>
                <ul className ="nav-links">
                    <Link to = '/'>
                    <li>Home</li>
                    </Link>
                    <Link to ='/cars'>
                    <li>Cars</li>
                    </Link>
                    <Link to = '/about'>
                    <li>About</li>
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