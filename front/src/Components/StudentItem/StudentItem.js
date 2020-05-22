import React from 'react';
import { GiSmartphone } from 'react-icons/gi'
import { FiWifiOff, FiWifi } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go'

import './StudentItem.css';

export const StudentItem = ({name, hasAddress, hasSmartphone, hasWhatsApp, hasWifi}) => {
    return (
        <div className="item-container">
            <div className="student-name">
                {name}
            </div>
            <div className="icons-container">
                <GoLocation style={!hasAddress && {color: '#FAFAFA'}} />
                <GiSmartphone style={!hasSmartphone && {color: '#FAFAFA'}} />
                <FiWifiOff style={!hasWhatsApp && {color: '#FAFAFA'}}/>
                <FiWifi style={!hasWifi && {color: '#FAFAFA'}} />
            </div>
        </div>
    )
}