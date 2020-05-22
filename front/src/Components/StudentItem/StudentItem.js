import React from 'react';
import { GiSmartphone } from 'react-icons/gi'
import { FiWifiOff, FiWifi } from 'react-icons/fi';
import { GoPerson } from 'react-icons/go'

import './StudentItem.css';

export const StudentItem = ({name, hasWifi, has3G, hasResponsible, hasSmartphone}) => {
    return (
        <div className="item-container">
            <div className="student-name">
                {name}
            </div>
            <div className="icons-container">
                <GiSmartphone style={!hasSmartphone && {color: '#fafafa'}} />
                <FiWifiOff style={!has3G && {color: '#fafafa'}}/>
                <FiWifi style={!hasWifi && {color: '#FAFAFA'}} />
                <GoPerson style={!hasResponsible && {color: '#FAFAFA'}} />
            </div>
        </div>
    )
}