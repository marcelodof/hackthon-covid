import React from 'react';

import { StudentItem } from '../StudentItem/StudentItem';

import './StudentsContainer.css'

export const StudentsContainer = ({studentList}) => {
    return (
        <div className="students-container">
            {
                studentList.map((student) => {
                    return <StudentItem 
                            name={student.name} 
                            hasSmartphone={student.hasSmartphone}
                            has3G={student.has3G}
                            hasWifi={student.hasWifi}
                            hasResponsible={student.hasResponsible}
                            />
                })
            }            
        </div>
    )
}