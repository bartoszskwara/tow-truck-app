import { useEffect } from 'react';
import { useAppDispatch } from '../../app/store';
import StationsView from './Stations.view';
import { clearStore } from './store/stationsSlice';

const Stations = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        return () => {
            dispatch(clearStore());
        };
    }, []);

    return <StationsView />;
};

export default Stations;
