import React from 'react';
import { GiSmartphone } from 'react-icons/gi'
import { FiWifi } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go'
import { FaWhatsapp } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';

import './StudentItem.css';

export const StudentItem = ({name, hasAddress, hasSmartphone, hasWhatsApp, hasWifi, phone, showPhone, homeworkHasBeenSent}) => {
    return (
        <div className={`item-container ${homeworkHasBeenSent? 'sent' : null}`}>
            <div className="student-name">
                {name}
            </div>
            {showPhone 
            ? <div className='student-phone'>
                <AiFillPhone/> {phone}
            </div>
            : <div className="icons-container">
                <GoLocation style={!hasAddress && {color: '#ff6f69'}} className="icon" />
                <GiSmartphone style={!hasSmartphone && {color: '#ff6f69'}} className="icon" />
                <FaWhatsapp style={!hasWhatsApp && {color: '#ff6f69'}} className="icon"/>
                <FiWifi style={!hasWifi && {color: '#ff6f69'}} className="icon" />
            </div>
            }
        </div>
    )
}