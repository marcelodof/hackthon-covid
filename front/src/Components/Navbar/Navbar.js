import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';

import "./Navbar.css"


export const Navbar = ({showClass}) => {
    return (
        <div className="navbar-wrapper">
            {showClass ?
            <div className="group-container">
                <div className="dropdown-button">
                    <GiHamburgerMenu />
                </div>
                <div className="group-name">
                    Turma A
                </div>
            </div> : <div></div>}
            <div className='tittle'>
                Salva Prof
            </div>
            {showClass ?
            <div className="teacher-avatar">
                <FaUserCircle />
            </div> : <div></div>}
        </div>
    )
}