import React from 'react';


export const Header = ( {element, editable} ) => {

    return (
        <header style={element.style.container}>
            <span className={editable ? 'editable' : undefined}>{element.content.text}</span>
        </header>
    )
}