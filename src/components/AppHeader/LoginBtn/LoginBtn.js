import React from 'react';
import { useHistory } from 'react-router-dom';

import './LoginBtn.scss';

export function LoginBtn() {
    
    let history = useHistory();

    const clickHandler = () => {
        history.push('/Login');
    }

    return (
        <input 
            className='login-btn bg-indigo' 
            type='button' 
            value='Login'
            onClick={clickHandler}    
        />
    )
} 