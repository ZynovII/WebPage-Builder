import React from 'react';
import { standartElements } from './StandartElement';
import { Template } from './Template/Template';

import './Templates.scss';


export const Templates = () => {

    const templatesArr = standartElements;

    let templates = templatesArr.map( v => (
        <Template key={v.id} template={v}
        />
    ) 
    );

    return (
        <div className='field-templates'>
            <div>
                <div className='field-templates__tabs'>
                    <div>templates</div>
                </div>
                {templates}
            </div>
        </div>
    )
}