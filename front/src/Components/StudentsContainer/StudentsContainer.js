import React from 'react';

import { StudentItem } from '../StudentItem/StudentItem';

import './StudentsContainer.css'

export const StudentsContainer = ({studentsList, showPhone, children, hasShadow}) => {
    return (
        <div className={`students-container ${hasShadow ? "shadow" : null}`}>
            <div className='student-container-list'>
                {
                    studentsList.map((student) => {
                        return <StudentItem
                                key={student.name}
                                name={student.name}
                                hasAddress={student.hasAddress}
                                hasWhatsApp={student.hasWhatsApp}
                                hasWifi={student.hasWifi}
                                phone={student.phone}
                                showPhone={showPhone}
                                homeworkHasBeenSent={student.homeworkHasBeenSent}
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