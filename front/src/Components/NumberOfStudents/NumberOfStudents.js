import React from 'react';


import './NumberOfStudents.css';

export const NumberOfStudents = ({metricsText, actionText, toggleModal}) => {
    return (
        metricsText &&
        <div className='filter-content-bottom'>
            <div className='students-metrics'>
                {metricsText}
            </div>
            { actionText && toggleModal &&
            <div className='modal-button' onClick={(activeFilter) => toggleModal(activeFilter)}>
                {actionText}
            </div>
            }
            </div>
    )
}