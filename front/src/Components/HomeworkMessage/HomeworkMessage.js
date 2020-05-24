import React from 'react';
import { GrDocumentPdf } from 'react-icons/gr';

import './HomeworkMessage.css'

const transformDate = (date) => {
    const dateArray = date.split('-')
    return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`
}

export const HomeworkMessage = ({topic, duration, deadline, additionalInfo, theoryFile, exerciseFile}) => {
    return (
    <div className="message-wrapper">
        <div className="whatsapp-balloon">
            <div>Olá, tudo bem? </div>
            <div>Viemos aqui entregar sua tarefa de Matemática. </div>
            <div>Vamos as informações?  </div><br/>
            <div>Professor(a): José da Silva </div> <br/>
            <div><span role='img' aria-label='book'>📖</span>Tópico: <strong> {topic}</strong></div> <br/>
            <div><span role='img' aria-label='duration'>⏳</span>Duração: <strong> {duration} </strong></div> <br/>
            <div><span role='img' aria-label='calendar'>📅</span>Data final para entrega: <strong> {transformDate(deadline)} </strong></div> <br/>
            <div>Informações adicionais: <strong>{additionalInfo} </strong></div> <br/>
            <div>Envie suas atividades dentro do prazo. Ótimos estudos!</div>
        </div> 
        { theoryFile && <div className="whatsapp-row">
            <strong>Teoria:</strong>
        </div>
        }
        { theoryFile && <div className="whatsapp-row">
            <GrDocumentPdf className="pdf-icon" /> {theoryFile}
        </div>
        }
        { exerciseFile && 
        <div className="whatsapp-row">
            <strong>Exercícios:</strong>
        </div>
        }
        {exerciseFile && 
        <div className="whatsapp-balloon">
            <GrDocumentPdf className="pdf-icon" /> {exerciseFile}
        </div>
        }
    </div>)
}