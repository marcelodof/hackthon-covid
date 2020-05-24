import React from 'react';

import { ModalHeader } from '../ModalHeader/ModalHeader';
import { StudentsContainer } from '../StudentsContainer/StudentsContainer';
import { HomeworkMessage } from '../HomeworkMessage/HomeworkMessage';

import './HomeworkPreview.css';

export const HomeworkPreview = (
    {
        toggleModal,
        headerText,
        topic,
        deadline,
        duration,
        additionalInfo,
        studentsList,
        homeworkHasBeenSent,
        exerciseFile,
        theoryFile
    }) => { 
    return (
    <React.Fragment>
        <ModalHeader toggleModal={toggleModal} headerText={headerText} />
    <div className="preview-wrapper">
            <div className="content-wrapper">
                <div className="whatsapp-background">
                    <div className="message-container">
                        <HomeworkMessage topic={topic} deadline={deadline} duration={duration} additionalInfo={additionalInfo} theoryFile={theoryFile} exerciseFile={exerciseFile} />
                    </div>
                </div>
                <div className="students-preview">
                    <StudentsContainer studentsList={studentsList} showPhone={true} />
                </div>
            </div>
            <div className="button-wrapper">
                <div onClick={homeworkHasBeenSent} className="submit-homework">
                    Enviar Atividade
                </div>
            </div>
        </div>
    </React.Fragment>
    )

}