import React from 'react';
import { STYLE_DIV, STYLE_FOOTER, STYLE_HEADER, STYLE_PICTURE, STYLE_TEXT } from './Template/StandartStyle';
import { Template } from './Template/Template';

import './Templates.scss';

const templatesArr = [
    { id: 0, name: 'header', type: 'header', style: STYLE_HEADER},
    { id: 1, name: 'text', type: 'p', style: STYLE_TEXT},
    { id: 2, name: 'picture', type: 'img', style: STYLE_PICTURE},
    { id: 3, name: 'footer', type: 'footer', style: STYLE_FOOTER},
    { id: 4, name: 'block', type: 'div', style: STYLE_DIV}
];

export const Templates = () => {
    
    let templates = templatesArr.map( v => (
        <Template key={v.id} style={v.style}
            name={v.name} type={v.type} 
        />
    ) 
    );

    return (
        <div className='field-templates'>
            {templates}
        </div>
    )
}