import React from 'react';
import { LoginBtn } from './LoginBtn';

export function AppHeader() {
    return (
        <div className='app-header bg-indigo text-white py-2'>
            <div className='container d-flex justify-content-between'>
                <span className='app-header__title'>WebPage Builder</span>
                <LoginBtn />
            </div>
        </div>
    )
} 