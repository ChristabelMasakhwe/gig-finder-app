import React from 'react';

export default function JobCard (props){
    return (
        <div className="job-card">
            <div className='card-item'>
                <h1>{props.title}</h1>
            </div>
            <div className='card-item'>
                <p>{props.body}</p>
            </div>
            <div className='card-item'>
                <p>Date: {props.date}</p>
            </div>
            <div className='card-item'>
                <button id='submit apply'>Apply</button>
            </div>
        </div>
    )
}
