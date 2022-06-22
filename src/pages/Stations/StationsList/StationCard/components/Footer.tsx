import { Box } from '@mui/material';
import Text from 'components/Text';
import withContext from 'hoc/withContext';
import { Station } from 'types';
import StationContext from '../../StationContext';
import Card from './Card';

const Footer = ({
    address: { street, city, region, zipcode, country },
}: Pick<Station, 'address'>) => (
    <Card type="bottom">
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                padding: (theme) => theme.spacing(1),
            }}
        >
            <Text
                text={`${street}, ${city}, ${region} ${zipcode}, ${country}`}
                sx={{
                    color: (theme) => theme.palette.text.secondary,
                }}
                variant="light"
            />
        </Box>
    </Card>
);

export default withContext(StationContext)(Footer);
