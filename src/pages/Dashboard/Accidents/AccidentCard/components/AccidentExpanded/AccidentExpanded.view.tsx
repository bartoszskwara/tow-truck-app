import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import Text, { LabelProps, LabelPropType } from 'components/Text';
import withContext from 'hoc/withContext';
import { AccidentStatusPropType } from 'propTypes';
import { Accident } from 'types';
import AccidentContext from '../../../AccidentContext';
import AccidentInfo from '../AccidentInfo';
import Address from './Address';

interface Props {
    mostRecent: boolean;
    lastUpdateLabel: LabelProps;
}
interface PropsWithContext extends Props, Pick<Accident, 'status'> {}

const AccidentExpandedView = ({
    mostRecent,
    lastUpdateLabel,
    status,
}: PropsWithContext) => (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box>
            {mostRecent && (
                <Box>
                    <Text
                        text="Most recent accident"
                        name="MostRecentAccident"
                        component="div"
                        sx={{
                            fontSize: (theme) => theme.spacing(2),
                            marginBottom: (theme) => theme.spacing(2),
                        }}
                    />
                </Box>
            )}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Address />
                    <Text
                        text="last update: {}"
                        name="LastUpdate"
                        variables={[
                            <Text key="lastUpdate" {...lastUpdateLabel} />,
                        ]}
                        variant="light"
                        sx={{
                            color: (theme) => theme.palette.gray[100],
                        }}
                    />
                </Box>
                <AccidentInfo />
            </Box>
        </Box>
        <Box
            sx={{
                textAlign: 'right',
                marginTop: (theme) => theme.spacing(4),
            }}
        >
            <Button
                onClick={(e) => {
                    e.stopPropagation();
                    console.log('showing map...');
                }}
            >
                <Text text="Locate" name="Locate" />
            </Button>
            {status === 'new' && (
                <Button
                    variant="contained"
                    color="accent"
                    sx={{ marginLeft: (theme) => theme.spacing(2) }}
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log('sending truck...');
                    }}
                >
                    <Text text="Send truck" name="SendTruck" />
                </Button>
            )}
        </Box>
    </Box>
);

AccidentExpandedView.propTypes = {
    mostRecent: PropTypes.bool.isRequired,
    lastUpdateLabel: LabelPropType.isRequired,
    status: AccidentStatusPropType.isRequired,
};

export default withContext<Props, Accident>(AccidentContext)(
    AccidentExpandedView
);
