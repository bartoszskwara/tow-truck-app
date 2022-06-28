import React, { useEffect, useMemo, useState } from 'react';
import _ from 'lodash';
import { useAppDispatch, useAppSelector } from 'app/store';
import { History } from 'types';
import HistoryView from './History.view';
import { clearStore, fetchHistory } from './store/historySlice';

const HistoryContainer = () => {
    const dispatch = useAppDispatch();
    const {
        history,
        apiStatus: { history: historyLoading },
    } = useAppSelector(({ history }) => history);
    const [current, setCurrent] = useState<History>();
    const loading = useMemo(
        () => historyLoading === 'pending',
        [historyLoading]
    );

    useEffect(() => {
        dispatch(fetchHistory());
        return () => {
            dispatch(clearStore());
        };
    }, []);

    useEffect(() => {
        if (!_.isEmpty(history)) {
            setCurrent(history[0]);
        }
    }, [history]);

    const onSelect = (history: History) => {
        setCurrent(history);
    };

    return (
        <HistoryView
            history={history}
            current={current}
            onSelect={onSelect}
            loading={loading}
        />
    );
};

export default HistoryContainer;
