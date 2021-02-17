import React from 'react';

import './Template.scss'

export const Template = ( props ) => {
    
    return (
        <div className='template-item'>
            <div>
                <div className='template-item__title'>{props.name}</div>
                <span className='temlate-item__description'>{props.type}</span>
            </div>
            <button className='btn btn-outline-success'>&#10010;</button>
        </div>
    )
}