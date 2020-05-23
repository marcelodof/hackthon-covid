import React from 'react';

import './TaskModal.css'

export const TaskModal = ({toggleModal, activeFilter}) => {
    return (
        <div className='modal-wrapper'>
            <button onClick={() => toggleModal()}>
                fechar modal
            </button>
            {activeFilter}
        </div>
    )
}