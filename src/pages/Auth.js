import React from 'react';

import './Auth.scss';

export const Auth = (props) => {

    return (
        <div className='auth-page container mt-4'>
            <h2>LogIn with GitHub account</h2>
            <button 
                className='btn btn-info btn-lg mt-4'
                onClick={props}
            >
                SignIn
            </button>
        </div>
    )
}