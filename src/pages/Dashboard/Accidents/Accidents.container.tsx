import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from 'app/store';
import { fetchAccidents } from '../store/dashboardSlice';
import AccidentsView from './Accidents.view';

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
        <AccidentsView
            sx={sx}
            accidents={accidents}
            loading={accidentsLoading}
            expanded={expanded}
            onClick={(item) =>
                setExpanded((prev) => (prev === item.id ? null : item.id))
            }
        />
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
