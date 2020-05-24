import React from 'react';

import './ProgressBar.css';

export const ProgressBar = ({percentage}) => {
    return (
        <div className="progress-bar-wrapper">
            <div className="progress-bar-text">
                {`${Math.round(percentage)}% dos alunos já receberam atividades`}
            </div>
            <div className="progressbar">
                <div className="progressbar-completed" style={{width:`${percentage}%`}}>

                </div>
            </div>
        </div>
    )
}