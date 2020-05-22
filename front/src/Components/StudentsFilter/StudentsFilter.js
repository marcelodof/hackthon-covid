import React from 'react';
import { GiSmartphone } from 'react-icons/gi'
import { FiWifiOff, FiWifi } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go'

import './StudentsFilter.css';

export const StudentsFilter = ({handleFilter}) => {
    return (
        <div className='filter-wrapper'>
            <div className='filter-buttons'>
                <div className='button' onClick={() => handleFilter('hasAddress')}>
                    Alunos sem celular
                </div>
                <div className='button' onClick={() => handleFilter('hasSmartphone')}>
                    <GiSmartphone/>
                </div>
                <div className='button' onClick={() => handleFilter('hasWhatsApp')}>
                    <FiWifiOff/>
                </div>  
                <div className='button' onClick={() => handleFilter('hasWifi')}>
                    <FiWifi/>
                </div>
            </div>
            <div className='filter-content'>
                
            </div>
        </div>
    )
}