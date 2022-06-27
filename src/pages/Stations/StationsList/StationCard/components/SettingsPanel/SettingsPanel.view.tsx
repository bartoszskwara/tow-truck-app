import React from 'react';
import PropTypes from 'prop-types';
import { Box, Tab, Tabs } from '@mui/material';
import Text from 'components/Text';
import withContext from 'hoc/withContext';
import { Station } from 'types';
import StationContext from '../../../StationContext';
import Card from '../Card';
import History from './History';

interface Props extends Pick<Station, 'color'> {
    currentTab: string;
    onTabChange: (e: React.SyntheticEvent, key: string) => void;
}

const SettingsPanelView = React.forwardRef<HTMLDivElement, Props>(
    ({ currentTab, onTabChange, color, ...divProps }, ref) => (
        <div ref={ref} {...divProps}>
            <Card
                type="middle"
                sx={{ marginBottom: (theme) => theme.spacing(1) }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        padding: (theme) =>
                            `${theme.spacing(1)} ${theme.spacing(2)} 0`,
                    }}
                >
                    <Tabs
                        value={currentTab}
                        onChange={onTabChange}
                        sx={{
                            borderBottom: (theme) =>
                                `1px solid ${theme.palette.gray[50]}`,
                            '.MuiTabs-indicator': {
                                backgroundColor: color,
                            },
                        }}
                    >
                        <Tab label={<Text name="History" />} value="history" />
                    </Tabs>
                    {currentTab === 'history' && <History />}
                </Box>
            </Card>
        </div>
    )
);
SettingsPanelView.displayName = 'SettingsPanelView';

SettingsPanelView.propTypes = {
    currentTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
};

export default withContext<Props, Station>(StationContext)(SettingsPanelView);
