import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Loader } from '../components/Loader/Loader';
import { AuthContext } from '../context/auth/authContext';

import './Auth.scss';

export const Auth = () => {

    const history = useHistory();
    const { user, login, loading } = useContext(AuthContext);
    const authenticate = () => {
        login();
        history.push('/Profile')
    };
    if(user) {
        return (
            <div className='auth-page container mt-4'>
                <h2>
                    You already authorized
                </h2>
            </div>
        )
    }

    return (
        <div className='auth-page container mt-4'>
            <h2>SignIn with GitHub account</h2>
            <button 
                className='btn btn-info btn-lg mt-4'
                onClick={authenticate}
            >
                Login
            </button>
            {loading && 
            <Loader />}
        </div>
    )
}