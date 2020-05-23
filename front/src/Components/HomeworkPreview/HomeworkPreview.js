import React from 'react';

import { ModalHeader } from '../ModalHeader/ModalHeader';


export const HomeworkPreview = ({toggleModal, headerText, topic, deadline, duration, addtionalInfo}) => { 
    return (
    <div>
        <ModalHeader toggleModal={toggleModal} headerText={headerText} />
        <div className="preview-wrapper">
            <div className="topic">
                {topic}
            </div>
            <div className="deadline">
                 {deadline}
            </div>
            <div className="duration">
                {duration}
            </div>
            <div className="addtionalInfo">
                {addtionalInfo}                
            </div>
        </div>
    </div>
    )

}