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
     handleTheoryFile,
     handleExerciseFile,
     activeFilter,
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
                    <input className='text-input-box' type="date" onChange={handleDeadlineChange} value={deadline}></input>
                </div>
                <div className="form-input">
                    <label>Duração</label><br/>
                    <input className='text-input-box' type="text" onChange={handleDurationChange} value={duration}></input>
                </div>
                <div className="form-input">
                    <label>Teoria</label><br/>
                    <input className="form-task-attachments" type="file" onChange={handleTheoryFile} />
                </div>
                <div className="form-input">
                    <label>Exercício</label><br/>
                    <input className="form-task-attachments" type="file" onChange={handleExerciseFile} />
                </div>
                {activeFilter === 'hasWhatsApp' && <>
                    <div className="form-input">
                        <label>Teoria</label><br/>
                        <input className="form-task-attachments" type="file"></input>
                    </div>
                    <div className="form-input">
                        <label>Exercício</label><br/>
                        <input className="form-task-attachments" type="file"></input>
                    </div>
                </>}
                {activeFilter === 'hasWifi' && <>
                    <div className="form-input">
                        <label>Vídeo Aula</label><br/>
                        <input className="form-task-attachments" type="file"></input>
                    </div>
                    <div className="form-input">
                        <label>Exercício</label><br/>
                        <input className="form-task-attachments" type="file"></input>
                    </div>
                </>}
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