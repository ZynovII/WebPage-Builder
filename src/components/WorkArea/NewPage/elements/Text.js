import React from 'react';


export const Text = ( {element, editable} ) => {

    return (
        <div style={element.style.container}>
            <p className={editable ? 'editable' : undefined}>
                {element.content.text}
            </p>
        </div>
    )
}