import React from 'react';
import { Template } from './Template/Template';

import './Templates.scss';

const templatesArr = [
    { id: 0, name: 'header', type: 'header'},
    { id: 1, name: 'text', type: 'text'},
    { id: 3, name: 'picture', type: 'picture'},
    { id: 2, name: 'footer', type: 'footer'},
];

export const Templates = () => {
    
    let templates = templatesArr.map( v => (
        <Template key={v.id} name={v.name} type={v.type} />
    ) 
    );

    return (
        <div className='field-templates'>
            {templates}
        </div>
    )
}