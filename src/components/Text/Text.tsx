import { ElementType, useMemo } from 'react';
import { Typography, TypographyProps } from '@mui/material';
import labels from 'assets/labels';
import { useUser } from 'hooks';
import {
    LabelNamePropType,
    LabelProps,
    LabelTextPropType,
    LabelVariablePropType,
} from './Text.types';

const generateId = () => Math.random().toString(36).slice(2);

export type TextProps = TypographyProps<
    ElementType,
    { component?: ElementType }
> &
    LabelProps;

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
    text: LabelTextPropType,
    name: LabelNamePropType,
    variables: LabelVariablePropType,
};

Text.defaultProps = {
    variables: [],
};

export default Text;
