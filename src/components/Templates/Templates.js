import React from 'react';
import { standartElements } from './StandartElement';
import { Template } from './Template/Template';

import './Templates.scss';


export const Templates = () => {

    const templatesArr = standartElements;

    let templates = templatesArr.map( v => (
        <Template key={v.id} style={v.style}
            name={v.name} type={v.type} dom={v.dom}
        />
    ) 
    );

    return (
        <div className='field-templates'>
            <div className='field-templates__tabs'>
                <div>Bloks</div>
                <div>Texts</div>
                <div>Pictures</div>
                <div>All</div>
            </div>
            {templates}
        </div>
    )
}