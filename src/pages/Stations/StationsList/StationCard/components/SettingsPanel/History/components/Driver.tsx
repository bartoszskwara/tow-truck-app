import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Avatar from 'components/Avatar';
import Text from 'components/Text';
import { Person } from 'types';

const Driver = ({ name, avatar }: Person) => (
    <Box
        sx={{
            marginTop: (theme) => theme.spacing(2),
            display: 'flex',
            alignItems: 'center',
        }}
    >
        <Avatar
            name={name}
            src={avatar}
            sxProps={{
                avatar: (theme) => ({
                    width: theme.spacing(4),
                    height: theme.spacing(4),
                }),
            }}
        />
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: (theme) => theme.spacing(1),
            }}
        >
            <Text
                name="Driver"
                sx={{
                    color: (theme) => theme.palette.text.secondary,
                    fontSize: (theme) => theme.spacing(1),
                    textTransform: 'uppercase',
                }}
                component="p"
                variant="bold"
            />
            <Text text={name} component="p" variant="bold" />
        </Box>
    </Box>
);

Driver.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
};

export default Driver;
