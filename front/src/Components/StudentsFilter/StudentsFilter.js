import React from 'react';

import './StudentsFilter.css';

export const StudentsFilter = ({handleFilter}) => {
    return (
        <div className='filter-wrapper'>
            <div className='filter-buttons'>
                <div className='button' onClick={() => handleFilter("notSmartphone")}>
                    Alunos sem celular
                </div>
                <div className='button' onClick={() => handleFilter('hasSmartphone')}>
                   Aluno com celular, sem Whatsapp
                </div>  
                <div className='button' onClick={() => handleFilter('hasWhatsApp')}>
                    Aluno com celular, com Whatsapp
                </div>
                <div className='button' onClick={() => handleFilter('hasWifi')}>
                    Aluno com celular com wifi
                </div>
            </div>
            <div className='filter-content'>
                
            </div>
        </div>
    )
}