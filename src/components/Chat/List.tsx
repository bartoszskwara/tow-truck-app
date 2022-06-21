import PropTypes from 'prop-types';
import {Box, SxProps, Zoom} from '@mui/material';
import { Theme } from '@mui/material/styles';
import Avatar from 'components/Avatar';
import Text from 'components/Text';
import { LabelProps } from 'components/Text/Text.types';
import { ChatItem } from 'types';

interface Props {
    items: ChatItem[];
    label: LabelProps;
    sx?: SxProps<Theme>;
}

const List = ({ items, label, sx }: Props) => {
    return (
        <Box
            sx={[
                {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            <Text
                text={label.text}
                name={label.name}
                sx={{
                    textTransform: 'uppercase',
                    fontSize: (theme) => theme.spacing(1.2),
                }}
                variant="bold"
            />
            <Box
                component="ul"
                sx={{
                    listStyleType: 'none',
                    margin: 0,
                    marginTop: (theme) => theme.spacing(2),
                    padding: 0,
                }}
            >
                {items.map((i) => (
                    <Box
                        component="li"
                        key={i.id}
                        sx={{
                            margin: 0,
                            padding: 0,
                            marginBottom: (theme) => theme.spacing(2),
                        }}
                    >
                        <Zoom in={true}>
                            <Avatar
                                key={`${i.type}_${i.id}`}
                                name={i.name}
                                status={i.status}
                                notifications={i.notifications}
                                src={i.avatar}
                            />
                        </Zoom>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

List.propTypes = {
    items: PropTypes.array,
    label: PropTypes.shape({
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        name: PropTypes.string,
    }),
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.func,
                PropTypes.object,
                PropTypes.bool,
            ])
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

List.defaultProps = {
    items: [],
    label: {
        text: '',
        name: '',
    },
};

export default List;
