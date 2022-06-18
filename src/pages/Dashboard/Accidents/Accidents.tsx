import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { clearStore, fetchAccidents } from '../dashboardSlice';
import Accident from './Accident';
import AccidentsLoader from './AccidentsLoader';

interface Props {
    sx?: SxProps<Theme>;
}

const Accidents = ({ sx }: Props) => {
    const dispatch = useAppDispatch();
    const { accidents, apiStatus } = useAppSelector(
        ({ dashboard }) => dashboard
    );
    const [expanded, setExpanded] = useState<number | null>(null);
    const accidentsLoading = apiStatus.accidents === 'pending';

    useEffect(() => {
        dispatch(fetchAccidents());
    }, []);

    return (
        <Box
            sx={[
                { display: 'flex', flexDirection: 'column' },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            {accidentsLoading && <AccidentsLoader />}
            {accidents.map((item, index) => (
                <Accident
                    key={item.id}
                    expanded={expanded === item.id || index === 0}
                    mostRecent={index === 0}
                    onClick={
                        index !== 0
                            ? () =>
                                  setExpanded((prev) =>
                                      prev === item.id ? null : item.id
                                  )
                            : undefined
                    }
                    {...item}
                />
            ))}
        </Box>
    );
};

Accidents.propTypes = {
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.func,
                PropTypes.object,
                PropTypes.bool,
            ])
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

export default Accidents;
