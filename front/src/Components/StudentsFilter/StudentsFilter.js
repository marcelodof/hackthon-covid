import React from 'react';
import { GiSmartphone } from 'react-icons/gi'
import { FiWifiOff, FiWifi } from 'react-icons/fi';
import { GoPerson, GoLocation } from 'react-icons/go'

import './StudentsFilter.css';

export const StudentsFilter = () => {
    return (
        <div className='filter-wrapper'>
            <div className='filter-buttons'>
                <div className='button'>
                    <GoLocation/>
                </div>
                <div className='button'>
                    <GiSmartphone/>
                </div>
                <div className='button'>
                    <FiWifiOff/>
                </div>  
                <div className='button'>
                    <FiWifi/>
                </div>
                <div className='button'>
                    <GoPerson/>
                </div>
            </div>
            <div className='filter-content'>
                
            </div>
        </div>
    )
}