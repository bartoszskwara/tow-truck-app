import { useContext } from 'react';
import { Box } from '@mui/material';
import Text from 'components/Text';
import { Station } from 'types';
import { StationContext } from '../StationsList';

const Title = () => {
    const { name, manager } = useContext<Partial<Station>>(StationContext);
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingBottom: (theme) => theme.spacing(2),
            }}
        >
            <Text
                text={name}
                sx={{
                    fontSize: (theme) => theme.spacing(2),
                }}
            />
            <Text
                text="manager: {}"
                name="Manager"
                variables={[manager?.name]}
                sx={{ color: (theme) => theme.palette.gray[70] }}
            />
        </Box>
    );
};

export default Title;
