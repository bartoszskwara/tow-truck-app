import PropTypes from 'prop-types';
import { Box, Fade, SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { Accident as AccidentType } from 'types';
import Accident from './components/Accident';
import AccidentsLoader from './components/AccidentsLoader';

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
        {loading && <AccidentsLoader />}
        {accidents.map((item, index) => (
            <Fade in={true} key={item.id} timeout={500}>
                <Accident
                    expanded={expanded === item.id || index === 0}
                    mostRecent={index === 0}
                    onClick={index !== 0 ? () => onClick(item) : undefined}
                    {...item}
                />
            </Fade>
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
