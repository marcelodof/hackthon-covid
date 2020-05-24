import React from 'react';
import { IoMdClose } from 'react-icons/io';

import "./ExerciseSent.css"

export const ExerciseSent = ({shouldShowAlert, handleDismissClick}) => {

    return (
        shouldShowAlert &&
        <div className="exercise-wrapper">
            <div className="text-wrapper">
                <div className="exercise-confirm-header">
                    Exercício enviado com sucesso!
                </div>
            </div>
            <div className='exercise-dismiss' onClick={handleDismissClick}>
                <IoMdClose/>
            </div>
        </div>
    )
}