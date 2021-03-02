import React from 'react';


export const Header = ( {element, editable} ) => {

    return (
        <header style={element.style.container}>
            <h1 className={editable ? 'editable' : undefined}>My new web page</h1>
        </header>
    )
}