import React, { useState } from 'react';
import { Settings } from '../components/Settings/Settings';
import { WorkArea } from '../components/WorkArea/WorkArea';
import { Templates } from '../components/Templates/Templates';
import { AppFooter } from '../components/AppFooter/AppFooter';
import { ElementState } from '../context/new-elements/ElementState';

import './AppPage.scss';

export const AppPage = () => {

    const [isSettingsOpen, setIsSettingsOpen] = useState(true);



    return (
        <ElementState>
            <div className='app-page'>
                <div className='app-page__main-area'>
                    {
                        isSettingsOpen &&
                        <Settings />
                    }
                    <WorkArea />
                    <Templates />
                </div>
                <AppFooter isOpen={isSettingsOpen} cbIsOpen={setIsSettingsOpen}/>
            </div>
        </ElementState>
    )
}