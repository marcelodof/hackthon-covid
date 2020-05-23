import React, { useState }  from 'react';
import Modal from 'react-modal';

import { StudentsContainer } from '../StudentsContainer/StudentsContainer'
import { TaskModal } from '../TaskModal/TaskModal';

import './StudentsFilter.css';
import { NumberOfStudents } from '../NumberOfStudents/NumberOfStudents';

export const StudentsFilter = ({handleFilter, studentsList, studentsMetrics, activeFilter}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const metricsText = `${studentsMetrics.studentsCount} aluno${studentsMetrics.studentsCount !== 1 ? 's' : ''}, que representa ${studentsMetrics.studentsPercentage}%`

    return (
        <div>
            <div className='filter-wrapper'>
                <div className='filter-buttons'>
                    <div className='button' onClick={() => handleFilter("notSmartphone")}>
                        Alunos sem celular
                    </div>
                    <div className='button' onClick={() => handleFilter('hasSmartphone')}>
                    Aluno com celular, sem Whatsapp
                    </div>  
                    <div className='button' onClick={() => handleFilter('hasWhatsApp')}>
                        Aluno com celular, com Whatsapp
                    </div>
                    <div className='button' onClick={() => handleFilter('hasWifi')}>
                        Aluno com celular com wifi
                    </div>
                </div>
                <div className='filter-content'>
                    <StudentsContainer
                        studentsList={studentsList}
                        showPhone={false}>
                        {activeFilter && <NumberOfStudents metricsText={metricsText} actionText={"Enviar Tarefa"} toggleModal={toggleModal} />}
                    </StudentsContainer>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}>
                <TaskModal 
                    toggleModal={toggleModal}
                    activeFilter={activeFilter}
                    studentsList={studentsList}/>
            </Modal>
        </div>
    )
}