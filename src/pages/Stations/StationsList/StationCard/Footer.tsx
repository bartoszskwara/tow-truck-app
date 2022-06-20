import { useContext } from 'react';
import { Box } from '@mui/material';
import { Station } from 'types';
import Text from '../../../../components/Text';
import StationContext from '../StationContext';
import Card from './Card';

const Footer = () => {
    const { address: { street, city, region, zipcode, country } = {}, color } =
        useContext<Partial<Station>>(StationContext);
    return (
        <Card color={color} type="bottom">
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
};

export default Footer;
