import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../context/auth/authContext';

import './LoginBtn.scss';

export function LoginBtn() {
    
    const { user } = useContext(AuthContext);

    let history = useHistory();

    const clickHandler = () => {
        if(!user) {
            history.push('/Login');
        } else {
            history.push('/Profile');
        }
    }

    return (
        <input 
            className='login-btn bg-indigo' 
            type='button' 
            value={ user ? 'Profile' : 'Login' }
            onClick={clickHandler}  
        />
    )
} 