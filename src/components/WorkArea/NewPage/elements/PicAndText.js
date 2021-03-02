import React from 'react';

export const PicAndText = ( {element, editable} ) => {

    return(
        <div style={element.style.container}>
            <img 
                src={element.content.src} 
                alt='pic' 
                width='300' 
                style={{float: 'left', marginRight: '5px'}} 
                className={editable ? 'editable' : undefined}
            />
            <p className={editable ? 'editable' : undefined}>
                {element.content.text}
            </p>
        </div>
    )
}