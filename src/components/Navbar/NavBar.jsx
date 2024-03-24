
import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
            <div className='nav-btn'>
                <div className="hamburger-icon" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>

            <div className="menu-items">
                <div>
                    <span className="M">M</span>
                    <span className="a">a</span>
                    <span className="a1">a</span>
                    <span className="r">r</span>
                    <span className="g">g</span>
                    <span className="d">d</span>
                    <span className="h">h</span>
                    <span className="a2">a</span>
                    <span className="r1">r</span>
                    <span className="s">s</span>
                    <span className="h1">h</span>
                    <span className="a3">a</span>
                    <span className="n">n</span>
                </div>
                <div>
                    <Link to='/'>HOME</Link>
                    <Link to='/colleges'>COLLEGES</Link>
                    <Link to='/courses'>EXAMS</Link>
                    <Link to='/career'>CAREER</Link>
                </div>
            </div>
        </div>
    );
}

export default HamburgerMenu;
