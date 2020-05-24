import React, { useState }  from 'react';
import Modal from 'react-modal';

import { StudentsContainer } from '../StudentsContainer/StudentsContainer'
import { TaskModal } from '../TaskModal/TaskModal';

import './StudentsFilter.css';
import { NumberOfStudents } from '../NumberOfStudents/NumberOfStudents';

export const StudentsFilter = ({handleFilter, studentsList, studentsMetrics, activeFilter, homeworkHasBeenSent}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const metricsText = `${studentsMetrics.studentsCount} aluno${studentsMetrics.studentsCount !== 1 ? 's' : ''}, que representa ${studentsMetrics.studentsPercentage}% da turma`

    return (
        <React.Fragment>
            <div className='filter-wrapper'>
                <div className='filter-buttons'>
                    <div className={`button ${activeFilter === 'notAddress' ? 'pressed' : null}`} 
                         onClick={() => handleFilter("notAddress")}>
                        Material Físico + Buscar na Escola
                    </div>
                    <div className={`button ${activeFilter === 'hasAddress' ? 'pressed' : null}`} 
                         onClick={() => handleFilter('hasAddress')}>
                        Material Físico + Entregue em Casa
                    </div>  
                    <div className={`button ${activeFilter === 'hasWhatsApp' ? 'pressed' : null}`} 
                         onClick={() => handleFilter('hasWhatsApp')}>
                        Material Digital + Dados Limitados
                    </div>
                    <div className={`button ${activeFilter === 'hasWifi' ? 'pressed' : null}`} 
                         onClick={() => handleFilter('hasWifi')}>
                        Material Digital + Dados Ilimitados
                    </div>
                </div>
                <div className='filter-content'>
                    <StudentsContainer
                        studentsList={studentsList}
                        hasShadow
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
                    studentsList={studentsList}
                    homeworkHasBeenSent={homeworkHasBeenSent}/>
            </Modal>
        </React.Fragment>
    )
}