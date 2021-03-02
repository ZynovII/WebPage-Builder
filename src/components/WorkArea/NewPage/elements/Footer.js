import React from 'react';


export const Footer = ( {element, editable} ) => {

    return (
        <footer style={element.style.container}>
            <h1 className={editable ? 'editable' : undefined}>Thanks for your page</h1>
        </footer>
    )
}