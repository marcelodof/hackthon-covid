import React from 'react';

import { StudentItem } from '../StudentItem/StudentItem';

import './StudentsContainer.css'

export const StudentsContainer = ({studentsList, showPhone, children}) => {
    return (
        <div className="students-container">
            <div className='student-container-list'>
                {
                    studentsList.map((student) => {
                        return <StudentItem
                                name={student.name}
                                hasAddress={student.hasAddress}
                                hasSmartphone={student.hasSmartphone}
                                hasWhatsApp={student.hasWhatsApp}
                                hasWifi={student.hasWifi}
                                phone={student.phone}
                                showPhone={showPhone}
                                />
                    })
                }
            </div>
            <div className='student-container-bottom'>
                {children}
            </div>
        </div>
    )
}