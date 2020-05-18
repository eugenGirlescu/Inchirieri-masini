import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import logo from './logo.png';



class Nav extends React.Component {
    render() {
        return(
            <header className = 'main-nav'>
                <div className = "logo">
                 <img src ={logo} />
                 </div>
                <nav className ="nav-links">
                    <ul>
                        <Link  to = '/'>
                        <li>Home</li>
                        </Link>
                        <Link to ='/cars'>
                        <li>Cars</li>
                        </Link>
                        <Link to = '/register'>
                        <li>Register</li>
                        </Link>
                        <Link to = '/login'>
                        <li>Login</li>
                        </Link>
                        <Link to = '/contact'>
                        <li>Contact</li>
                        </Link>
                    </ul>
                </nav>
            </header>
        );
    }
};
export default Nav;