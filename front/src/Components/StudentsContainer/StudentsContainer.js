import React from 'react';

import { StudentItem } from '../StudentItem/StudentItem';

import './StudentsContainer.css'

export const StudentsContainer = ({studentsList}) => {
    return (
        <div className="students-container">
            {
                studentsList.map((student) => {
                    return <StudentItem 
                            name={student.name}
                            hasAddress={student.hasAddress}
                            hasSmartphone={student.hasSmartphone}
                            hasWhatsApp={student.hasWhatsApp}
                            hasWifi={student.hasWifi}
                            />
                })
            }            
        </div>
    )
}