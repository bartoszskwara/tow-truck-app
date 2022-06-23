import PropTypes from 'prop-types';
import { Box, Fade } from '@mui/material';
import { AccidentPropType, SxPropType } from 'propTypes';
import { Accident as AccidentType, Sx } from 'types';
import AccidentCard from './AccidentCard';
import AccidentContext from './AccidentContext';
import Loader from './Loader';

interface Props {
    sx?: Sx;
    accidents: AccidentType[];
    loading: boolean;
    expanded?: number | null;
    onClick: (item: AccidentType) => void;
}

const AccidentsView = ({
    sx,
    accidents,
    loading,
    expanded,
    onClick,
}: Props) => (
    <Box
        sx={[
            { display: 'flex', flexDirection: 'column' },
            ...(Array.isArray(sx) ? sx : [sx]),
        ]}
    >
        {loading && <Loader />}
        {accidents.map((item, index) => (
            <AccidentContext.Provider key={item.id} value={item}>
                <Fade in={true} timeout={500}>
                    <AccidentCard
                        expanded={expanded === item.id || index === 0}
                        mostRecent={index === 0}
                        onClick={index !== 0 ? () => onClick(item) : undefined}
                    />
                </Fade>
            </AccidentContext.Provider>
        ))}
    </Box>
);

AccidentsView.propTypes = {
    sx: SxPropType,
    accidents: PropTypes.arrayOf(AccidentPropType.isRequired).isRequired,
    loading: PropTypes.bool.isRequired,
    expanded: PropTypes.number,
    onClick: PropTypes.func.isRequired,
};

export default AccidentsView;
