import React, { useState } from 'react';

import { HomeworkPreview } from '../HomeworkPreview/HomeworkPreview';
import { HomeworkInput } from '../HomeworkInput/HomeworkInput';

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
    
    return (!homeworkSent
            ? <HomeworkInput toggleModal={toggleModal}
                             headerText={"Enviar atividade por WhatsApp"}
                             topic={topic}
                             deadline={deadline}
                             duration={duration}
                             additionalInfo={additionalInfo}
                             studentsList={studentsList}
                             handleDeadlineChange={handleDeadlineChange}
                             handleTopicChange={handleTopicChange}
                             handleAdditionalInfoChange={handleAdditionalInfoChange}
                             handleDurationChange={handleDurationChange}
                             handleSeePreview={handleSeePreview}
                             />
            : <HomeworkPreview toggleModal={toggleModal}
                               headerText={"Podemos Enviar"}
                               topic={topic}
                               deadline={deadline}
                               additionalInfo={additionalInfo}
                               duration={duration}
                               studentsList={studentsList}
                               />)
    }