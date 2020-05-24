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
                    <label className="label">Tópico da atividade:</label><br/>
                    <input className='text-input-box' type="text" onChange={handleTopicChange} value={topic}></input>
                </div>
                <div className="form-input">
                    <label className="label">Prazo de entrega:</label><br/>
                    <input className='text-input-box' type="date" onChange={handleDeadlineChange} value={deadline}></input>
                </div>
                <div className="form-input">
                    <label className="label">Duração da atividade:</label><br/>
                    <input className='text-input-box' type="text" onChange={handleDurationChange} value={duration}></input>
                </div>
                {activeFilter === 'hasWhatsApp' && <>
                    <div className="form-input">
                        <label className="label">Teoria</label><br/>
                        <input className="form-task-attachments" type="file" onChange={handleTheoryFile} />
                    </div>
                    <div className="form-input">
                        <label className="label">Exercício</label><br/>
                        <input className="form-task-attachments" type="file" onChange={handleExerciseFile} />
                    </div>
                </>}
                {activeFilter === 'hasWifi' && <>
                    <div className="form-input">
                        <label className="label">Vídeo Aula</label><br/>
                        <input className="form-task-attachments" type="file" onChange={handleTheoryFile}/>
                    </div>
                    <div className="form-input">
                        <label className="label">Exercício</label><br/>
                        <input className="form-task-attachments" type="file" onChange={handleExerciseFile}/>
                    </div>
                </>}
                <div className="form-input">
                    <label className="label">Informações Adicionais</label><br/>
                    <textarea className='textarea-form' onChange={handleAdditionalInfoChange} value={additionalInfo}></textarea>                          
                </div>
                <div className="submit-button" onClick={handleSeePreview}>
                    Conferir o resumo
                </div>
            </form>
        </div>
    )
}