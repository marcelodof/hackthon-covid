import React, { useState } from 'react';

import { StudentsContainer } from '../StudentsContainer/StudentsContainer';
import { NumberOfStudents } from '../NumberOfStudents/NumberOfStudents';
import { InputForm } from '../InputForm/InputForm';
import { HomeworkPreview } from '../HomeworkPreview/HomeworkPreview';
import { ModalHeader } from '../ModalHeader/ModalHeader';

import './TaskModal.css'

export const TaskModal = ({toggleModal, activeFilter, studentsList}) => {
    const [topic, setTopic] = useState("");
    const [deadline, setDeadline] = useState("");
    const [duration, setDuration] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [homeworkSent, setHomeworkSent] = useState(false);

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
        setAdditionalInfo(event.target.value)
    }

    const handleSeePreview = () => {
        setHomeworkSent(true);
    }

    const metricsText = `${studentsList.length} aluno${studentsList.length !== 1 ? 's' : ''}`

    const homeworkInput = () => (
        <div className='modal-wrapper'>
            <ModalHeader headerText={"Enviar tarefa via whatsapp"} toggleModal={toggleModal} />
            <div className='modal-form'>
                <StudentsContainer
                    studentsList={studentsList}
                    showPhone={true}>
                    <NumberOfStudents metricsText={metricsText} />
                </StudentsContainer>
                <div className="input-form">
                    <InputForm
                        topic={topic}
                        deadline={deadline}
                        duration={duration}
                        additionalInfo={additionalInfo}
                        handleDeadlineChange={handleDeadlineChange}
                        handleTopicChange={handleTopicChange}
                        handleAdditionalInfoChange={handleAdditionalInfoChange}
                        handleDurationChange={handleDurationChange}
                        handleSeePreview={handleSeePreview}
                    />
                </div>
            </div>
        </div>
    )
    
    return (!homeworkSent ? homeworkInput() : 
            <HomeworkPreview toggleModal={toggleModal}
                             headerText={"Podemos Enviar"}
                             topic={topic}
                             deadline={deadline}
                             additionalInfo={additionalInfo}
                             duration={duration}
                             />)
    }