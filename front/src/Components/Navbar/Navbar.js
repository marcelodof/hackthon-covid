import React from 'react';

import "./Navbar.css"


export const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="group-container">
                <div className="dropdown-button">
                    Botão
                </div>
                <div className="group-name">
                    Turma A
                </div>
            </div>
            <div className="teacher-avatar">
                Foto
            </div>

        </div>
    )
}