import PropTypes from 'prop-types';
import { Box, Fade, SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { Accident as AccidentType } from 'types';
import AccidentCard from './AccidentCard';
import AccidentContext from './AccidentContext';
import Loader from './Loader';

interface Props {
    sx?: SxProps<Theme>;
    accidents: AccidentType[];
    loading: boolean;
    expanded: number | null;
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

export default AccidentsView;
