import React, { useState } from 'react';

import { HomeworkPreview } from '../HomeworkPreview/HomeworkPreview';
import { HomeworkInput } from '../HomeworkInput/HomeworkInput';

import './TaskModal.css'

export const TaskModal = ({toggleModal, activeFilter, studentsList, homeworkHasBeenSent}) => {
    const [topic, setTopic] = useState("");
    const [deadline, setDeadline] = useState("");
    const [duration, setDuration] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [homeworkSent, setHomeworkSent] = useState(false);
    const [theoryFile, setTheoryFile] = useState(null);
    const [exerciseFile, setExerciseFile] = useState(null)

    const handleTheoryFile = (event) => {
        console.log(event)
        setTheoryFile(event.target.files[0].name);
    }

    const handleExerciseFile = (event) => {
        setExerciseFile(event.target.files[0].name);
    }

    const handleHomeworkSent = () => {
        homeworkHasBeenSent();
        toggleModal();
    }

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
                             theoryFile={theoryFile}
                             exerciseFile={exerciseFile}
                             studentsList={studentsList}
                             handleDeadlineChange={handleDeadlineChange}
                             handleTopicChange={handleTopicChange}
                             handleAdditionalInfoChange={handleAdditionalInfoChange}
                             handleDurationChange={handleDurationChange}
                             handleSeePreview={handleSeePreview}
                             handleTheoryFile={handleTheoryFile}
                             handleExerciseFile={handleExerciseFile}
                             activeFilter={activeFilter}
                             />
            : <HomeworkPreview toggleModal={toggleModal}
                               headerText={"Veja como ficou sua atividade!"}
                               topic={topic}
                               deadline={deadline}
                               additionalInfo={additionalInfo}
                               duration={duration}
                               studentsList={studentsList}
                               homeworkHasBeenSent={handleHomeworkSent}
                               theoryFile={theoryFile}
                               exerciseFile={exerciseFile}
                               />)
    }