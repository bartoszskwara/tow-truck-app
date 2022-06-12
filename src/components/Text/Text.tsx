import { ReactNode, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Typography, TypographyProps } from '@mui/material';
import labels from 'assets/labels';
import { useUser } from 'hooks';

const generateId = () => Math.random().toString(36).slice(2);

export interface TextProps extends TypographyProps {
    text?: string | ReactNode;
    name?: string;
    variables?: (string | number)[];
}

const Text = ({ text, name, variables, ...rest }: TextProps) => {
    const id = generateId();
    const { preferences: { language } = { language: 'en' } } = useUser();
    const translation = useMemo(() => {
        const label = labels.find((l) => l.name === name);
        let translatedLabel = label ? label.translations[language] : null;
        if (!translatedLabel) {
            return text;
        }
        return translatedLabel.split('{}').map((part, idx) => (
            <span key={`${id}_${part}`}>
                {part}
                {variables?.[idx]}
            </span>
        ));
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
