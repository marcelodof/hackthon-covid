import React from 'react';
import { GrDocumentPdf } from 'react-icons/gr';

import './HomeworkMessage.css'

export const HomeworkMessage = ({topic, duration, deadline, additionalInfo, theoryFile, exerciseFile}) => {
    console.log(theoryFile);
    console.log(exerciseFile)
    return (
    <div className="message-wrapper">
        <div className="whatsapp-balloon">
        Olá, tudo bem? <br/> 
        Viemos aqui entregar sua tarefa de Matemática. <br />
        Vamos as informações? <br />
            Professor (a) : José da Silva <br />
            Tópico:  {topic} <br />
            Duração : {duration} <br />
            📅Data final para entrega : {deadline} <br />
            Informações adicionais: {additionalInfo} <br/>
            Envie suas atividades dentro do prazo. Ótimos estudos!
        </div>
        <div className="whatsapp-balloon">
            <GrDocumentPdf className="pdf-icon" /> {theoryFile}
        </div>
        <div className="whatsapp-balloon">
            <GrDocumentPdf className="pdf-icon" /> {exerciseFile}
        </div>
    </div>)
}