import React from 'react';

import { ModalHeader } from '../ModalHeader/ModalHeader';
import { StudentsContainer } from '../StudentsContainer/StudentsContainer';
import { HomeworkMessage } from '../HomeworkMessage/HomeworkMessage';

import './HomeworkPreview.css';

export const HomeworkPreview = ({toggleModal, headerText, topic, deadline, duration, additionalInfo, studentsList}) => { 
    return (
    <React.Fragment>
        <ModalHeader toggleModal={toggleModal} headerText={headerText} />
        <div className="preview-wrapper">
            <div className="whatsapp-background">
                <div className="message-container">
                    <HomeworkMessage topic={topic} deadline={deadline} duration={duration} additionalInfo={additionalInfo} />
                </div>
            </div>
            <div className="students-preview">
                <StudentsContainer studentsList={studentsList} showPhone={true} />
            </div>
        </div>
    </React.Fragment>
    )

}