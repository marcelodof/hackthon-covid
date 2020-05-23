import React from 'react';
import { IoMdClose } from 'react-icons/io';

import './ModalHeader.css'


export const ModalHeader = ({headerText, toggleModal}) => {
    return (
    <div className='modal-header'>
        <div className='modal-tittle'>
            {headerText}
        </div>
        <div className='modal-back-button' onClick={() => toggleModal()}>
            <IoMdClose/>
        </div>
    </div>)
}