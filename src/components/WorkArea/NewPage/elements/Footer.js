import React from 'react';


export const Footer = ( {element, editable} ) => {

    return (
        <footer style={element.style.container}>
            <span className={editable ? 'editable' : undefined}>{element.content.text}</span>
        </footer>
    )
}