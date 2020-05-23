import React, { useState } from 'react';

import './InputForm.css'


export const InputForm = () => {
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

    return  (
        <div className="input-wrapper">
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
    )
}