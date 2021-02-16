import React from 'react';
import { Settings } from '../components/Settings';
import { WorkArea } from '../components/WorkArea';
import { Templates } from '../components/Templates';
import { AppFooter } from '../components/AppFooter';

import './AppPage.scss';

export const AppPage = () => {
    return (
        <div className='app-page'>
            <div className='app-page__main-area'>
                <Settings />
                <WorkArea />
                <Templates />
            </div>
            <AppFooter />
        </div>
    )
}