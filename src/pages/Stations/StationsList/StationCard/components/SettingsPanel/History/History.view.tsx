import React from 'react';
import { Box, Divider } from '@mui/material';
import { History } from 'types';
import HistoryDetails from './components/HistoryDetails';
import HistoryList from './components/HistoryList';
import Loader from './Loader';

interface Props {
    history: History[];
    current?: History;
    onSelect: (history: History) => void;
    loading: boolean;
}

const HistoryView = ({ history, current, onSelect, loading }: Props) => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: (theme) => theme.spacing(2),
        }}
    >
        {loading ? (
            <Loader />
        ) : (
            <>
                <HistoryList
                    selected={current}
                    history={history}
                    onSelect={onSelect}
                    sx={{ flex: 1 }}
                />
                <Divider orientation="vertical" flexItem sx={{ marginX: theme => theme.spacing(1) }}/>
                {current && <HistoryDetails data={current} sx={{ flex: 1 }} />}
            </>
        )}
    </Box>
);

export default HistoryView;
