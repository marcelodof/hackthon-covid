import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';

import "./Navbar.css"


export const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="group-container">
                <div className="dropdown-button">
                    <GiHamburgerMenu />
                </div>
                <div className="group-name">
                    Turma A
                </div>
            </div>
            <div className="teacher-avatar">
                    <FaUserCircle />
            </div>

        </div>
    )
}