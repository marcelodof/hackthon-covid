import React from 'react';

import './InputForm.css'


export const InputForm = (
    {topic,
     deadline,
     duration,
     additionalInfo,
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
                    <input className='text-input-box' type="text" onChange={handleTopicChange} value={topic}></input>
                </div>
                <div className="form-input">
                    <label>Prazo</label><br/>
                    <input className='text-input-box' type="text" onChange={handleDeadlineChange} value={deadline}></input>
                </div>
                <div className="form-input">
                    <label>Duração</label><br/>
                    <input className='text-input-box' type="text" onChange={handleDurationChange} value={duration}></input>
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
                    <label>Informações Adicionais</label><br/>
                    <textarea className='textarea-form' onChange={handleAdditionalInfoChange} value={additionalInfo}></textarea>                          
                </div>
                <div className="submit-button" onClick={handleSeePreview}>
                    Conferir o resumo
                </div>
            </form>
        </div>
    )
}