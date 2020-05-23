import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import { StudentsContainer } from '../StudentsContainer/StudentsContainer';
import { NumberOfStudents } from '../NumberOfStudents/NumberOfStudents';

import './TaskModal.css'

export const TaskModal = ({toggleModal, activeFilter, studentsList}) => {

    const metricsText = `${studentsList.length} aluno${studentsList.length !== 1 ? 's' : ''}`
    const [topic, setTopic] = useState("");
    const [deadline, setDeadline] = useState("");
    const [duration, setDuration] = useState("");
    const [addtionalInfo, setAddtionalInfo] = useState("");

    const handleTopicChange = (event) => {
        setTopic(event.target.value)
    }
    const handleDeadlineChange = (event) => {
        setDeadline(event.target.value)
    }
    const handleDurationChange = (event) => {
        setDuration(event.target.value)
    }
    const handleAdditionalInfoChange = (event) => {
        setAddtionalInfo(event.target.value)
    }
    
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
                <div>
                    <form>
                        <div className="form-input">
                            <label>Tópico</label><br/>
                            <input type="text" onChange={handleTopicChange} value={topic}></input>
                        </div>
                        <div className="form-input">
                            <label>Prazo</label><br/>
                            <input type="text" onChange={handleDeadlineChange} value={deadline}></input>
                        </div>
                        <div className="form-input">
                            <label>Duração</label><br/>
                            <input type="text" onChange={handleDurationChange} value={duration}></input>
                        </div>
                        <div className="form-task-attachments">
                            <label>Exercício</label><br/>
                            <input type="file"></input>
                        </div>
                        <div className="form-task-attachments">
                            <label>Gabarito</label><br/>
                            <input type="file"></input>
                        </div>
                        <div className="form-input">
                            <label>Informações Adcionais</label><br/>
                            <textarea onChange={handleAdditionalInfoChange} value={addtionalInfo}></textarea>                          
                        </div>
                        <div className="submit-button">
                            Enviar
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}