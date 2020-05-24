import React from 'react';

import './ProgressBar.css';

export const ProgressBar = ({percentage}) => {
    return (
        <div className="progressbar">
            <div className="progressbar-completed" style={{width:`${percentage}%`}}></div>
        </div>
    )
}