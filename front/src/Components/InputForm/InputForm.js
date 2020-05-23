import React from 'react';

import './InputForm.css'


export const InputForm = (
    {topic,
     deadline,
     duration,
     addtionalInfo,
     handleAdditionalInfoChange,
     handleDeadlineChange,
     handleDurationChange,
     handleTopicChange,
     handleSeePreview}) => {
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
                <div className="submit-button" onClick={handleSeePreview}>
                    Conferir o resumo
                </div>
            </form>
        </div>
    )
}