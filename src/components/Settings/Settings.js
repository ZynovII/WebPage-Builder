import React, { useContext, useRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ElementContext } from '../../context/new-elements/elementContext';
import { Setting } from './Setting/Setting';

import './Settings.scss';

export const Settings = () => {
    
    const {container, elements} = useContext(ElementContext);
    const nodeRef = useRef(null);

    return (
        <div className='field-settings'>
            <div className='field-templates__tabs'>
                <div>settings</div>
            </div>
            <Setting elem={container} />
            <TransitionGroup>
                { 
                    elements.map( el => (
                        <CSSTransition 
                            key={el.id}
                            nodeRef={nodeRef}
                            classNames='setting'
                            timeout={{ enter: 500, exit: 500}}    
                        >
                            <Setting elem={el}/>
                        </CSSTransition>
                    )) 
                }
            </TransitionGroup>
        </div>
    )
}