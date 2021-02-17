import React from 'react';
import { useHistory } from 'react-router-dom';

import './MainPage.scss';

export const MainPage = () => {
    let history = useHistory();
    
    function handleClick() {
        history.push("/Constructor");
    }

    return (
        <div className='main-page container mt-4'>
            <h1>Welcome to WebPage Builder!</h1>
            <p className='main-page__text'>
                Here you can build your own web page, costomise it and save, for using it as presintation or other diferents way.
            </p>
            <div className='main-page__start'>
                <button className='main-page__start__redirect' onClick={handleClick}>Lets start!</button>
            </div>
        </div>
    )
}