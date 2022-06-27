import React, { useState } from 'react';
import SettingsPanelView from './SettingsPanel.view';

const SettingsPanelContainer = () => {
    const [currentTab, setCurrentTab] = useState('history');
    const onTabChange = (e: React.SyntheticEvent, key: string) =>
        setCurrentTab(key);

    return (
        <SettingsPanelView currentTab={currentTab} onTabChange={onTabChange} />
    );
};

export default SettingsPanelContainer;
