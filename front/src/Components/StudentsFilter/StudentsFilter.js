import React, { useState }  from 'react';
import Modal from 'react-modal';

import { StudentsContainer } from '../StudentsContainer/StudentsContainer'
import { TaskModal } from '../TaskModal/TaskModal';

import './StudentsFilter.css';

export const StudentsFilter = ({handleFilter, studentsList, studentsMetrics, activeFilter}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

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
                    <StudentsContainer studentsList={studentsList}>
                        {activeFilter
                        ? <div className='filter-content-bottom'>
                            <div className='students-metrics'>
                                {studentsMetrics.studentsCount} - {studentsMetrics.studentsPercentage}%
                            </div>
                            <div className='modal-button' onClick={(activeFilter) => toggleModal(activeFilter)}>
                                Enviar Tarefa
                            </div>
                        </div>
                        : <div></div>
                        }
                    </StudentsContainer>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}>
                <TaskModal 
                    toggleModal={toggleModal}
                    activeFilter={activeFilter}/>
            </Modal>
        </div>
    )
}