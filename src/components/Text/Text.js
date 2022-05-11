import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { useUser } from 'hooks';
import labels from './labels';

const Text = ({ text, name, ...rest }) => {
    const {
        user: {
            preferences: { language },
        },
    } = useUser();
    const translation = useMemo(() => {
        const label = labels.find((l) => l.name === name);
        return label ? label.translations[language] : null;
    }, [language, name]);
    return (
        <Typography variant="regular" {...rest}>
            {translation || text}
        </Typography>
    );
};

Text.propTypes = {
    text: PropTypes.string,
    name: PropTypes.string,
};

export default Text;
