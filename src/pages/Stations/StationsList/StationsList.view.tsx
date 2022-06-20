import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Box, Fade } from '@mui/material';
import { ApiStatus, OnlineStatus, Station } from 'types';
import StationCard from './StationCard';
import StationContext from './StationContext';
import StationsListLoader from './StationsListLoader';

interface Props {
    stationsApiStatus: ApiStatus;
    stations: Station[];
}

const StationsListView = React.forwardRef<ReactNode, Props>(
    ({ stationsApiStatus, stations }, ref) => (
        <>
            {stationsApiStatus === 'pending' && <StationsListLoader />}
            {stationsApiStatus === 'success' && (
                <Box
                    component="ul"
                    sx={{
                        listStyleType: 'none',
                        margin: 0,
                        padding: 0,
                        flex: 1,
                    }}
                    ref={ref}
                >
                    {stations.map((i) => (
                        <Box
                            component="li"
                            key={`station_${i.id}`}
                            sx={{ marginBottom: (theme) => theme.spacing(4) }}
                        >
                            <StationContext.Provider value={i}>
                                <Fade in={true}>
                                    <StationCard />
                                </Fade>
                            </StationContext.Provider>
                        </Box>
                    ))}
                </Box>
            )}
        </>
    )
);
StationsListView.displayName = 'StationsList';
StationsListView.propTypes = {
    stationsApiStatus: PropTypes.oneOf<ApiStatus>([
        'idle',
        'pending',
        'success',
        'failed',
    ]).isRequired,
    stations: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string,
            status: PropTypes.oneOf<OnlineStatus>([
                'online',
                'offline',
                'driving',
            ]).isRequired,
            manager: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                avatar: PropTypes.string,
            }).isRequired,
            members: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    avatar: PropTypes.string,
                }).isRequired
            ).isRequired,
            stats: PropTypes.arrayOf(
                PropTypes.oneOfType([
                    PropTypes.shape({
                        type: PropTypes.string.isRequired,
                        value: PropTypes.number.isRequired,
                    }).isRequired,
                    PropTypes.shape({
                        type: PropTypes.string.isRequired,
                        available: PropTypes.number.isRequired,
                        all: PropTypes.number.isRequired,
                    }).isRequired,
                ]).isRequired
            ).isRequired,
            address: PropTypes.shape({
                city: PropTypes.string.isRequired,
                region: PropTypes.string.isRequired,
                zipcode: PropTypes.string.isRequired,
                street: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired,
            }).isRequired,
            color: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

export default StationsListView;
