import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Box, Fade } from '@mui/material';
import { ApiStatusPropType, StationPropType } from 'propTypes';
import { ApiStatus, Station } from 'types';
import StationsLoader from './Loader';
import StationCard from './StationCard';
import StationContext from './StationContext';

interface Props {
    stationsApiStatus: ApiStatus;
    stations: Station[];
}

const StationsListView = React.forwardRef<ReactNode, Props>(
    ({ stationsApiStatus, stations }, ref) => (
        <>
            {stationsApiStatus === 'pending' && <StationsLoader />}
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
    stationsApiStatus: ApiStatusPropType.isRequired,
    stations: PropTypes.arrayOf(StationPropType.isRequired).isRequired,
};

export default StationsListView;
