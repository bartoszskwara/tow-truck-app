import { Box } from '@mui/material';
import Text, { LabelProps, LabelPropType, Variable } from 'components/Text';
import { LabelVariablePropType } from 'components/Text/Text.types';
import { SxPropType } from 'propTypes';
import { AccidentStatus, Sx } from 'types';
import getStatusColor from 'utilities/getStatusColor';

interface Props {
    headerLabel: LabelProps;
    headerValue: Variable;
    subtitleLabel: LabelProps;
    subtitleValue: Variable;
    sx?: Sx;
    status: AccidentStatus;
}

const InfoBox = ({
    headerLabel,
    headerValue,
    subtitleLabel,
    subtitleValue,
    sx,
    status,
}: Props) => (
    <Box sx={[...(Array.isArray(sx) ? sx : [sx])]}>
        <Text
            text={headerLabel.text}
            name={headerLabel.name}
            variables={[headerValue]}
            sx={{
                fontSize: (theme) => theme.spacing(2),
                ...(status === 'missed'
                    ? { color: (theme) => getStatusColor(theme, status) }
                    : {}),
            }}
            variant="bold"
        />
        <br />
        <Text
            text={subtitleLabel.text}
            name={subtitleLabel.name}
            variables={[subtitleValue]}
            variant="light"
            sx={{
                color: (theme) => theme.palette.gray[100],
            }}
        />
    </Box>
);

InfoBox.propTypes = {
    headerLabel: LabelPropType.isRequired,
    headerValue: LabelVariablePropType,
    subtitleLabel: LabelPropType.isRequired,
    subtitleValue: LabelVariablePropType,
    sx: SxPropType,
};

export default InfoBox;
