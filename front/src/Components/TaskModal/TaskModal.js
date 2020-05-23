import React from 'react';
import { IoMdClose } from 'react-icons/io';

import { StudentsContainer } from '../StudentsContainer/StudentsContainer';
import { NumberOfStudents } from '../NumberOfStudents/NumberOfStudents';
import { InputForm } from '../InputForm/InputForm';

import './TaskModal.css'

export const TaskModal = ({toggleModal, activeFilter, studentsList}) => {

    const metricsText = `${studentsList.length} aluno${studentsList.length !== 1 ? 's' : ''}`
    
    return (
        <div className='modal-wrapper'>
            <div className='modal-header'>
                <div className='modal-tittle'>
                    Enviar tarefx por WhatsApp
                </div>
                <div className='modal-back-button' onClick={() => toggleModal()}>
                    <IoMdClose/>
                </div>
            </div>
            <div className='modal-form'>
                <StudentsContainer
                    studentsList={studentsList}
                    showPhone={true}>
                    <NumberOfStudents metricsText={metricsText} />
                </StudentsContainer>
                <div className="input-form">
                    <InputForm />
                </div>
            </div>
        </div>
    )
}