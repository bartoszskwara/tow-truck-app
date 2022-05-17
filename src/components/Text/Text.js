import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import labels from 'assets/labels';
import { useUser } from 'hooks';

const Text = ({ text, name, variables, ...rest }) => {
    const {
        user: {
            preferences: { language },
        },
    } = useUser();
    const translation = useMemo(() => {
        const label = labels.find((l) => l.name === name);
        let translatedLabel = label ? label.translations[language] : null;
        return variables.reduce(
            (result, current) =>
                translatedLabel?.replace('{}', current) || null,
            translatedLabel
        );
    }, [language, name, variables]);
    return (
        <Typography variant="regular" {...rest}>
            {translation || text}
        </Typography>
    );
};

Text.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
    ]),
    name: PropTypes.string,
    variables: PropTypes.array,
};

Text.defaultProps = {
    variables: [],
};

export default Text;
