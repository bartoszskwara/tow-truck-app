import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Text from 'components/Text';
import BadgeAvatar from './BadgeAvatar';

const List = ({ items, label, sx }) => {
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
                        <BadgeAvatar
                            key={`${i.type}_${i.id}`}
                            name={i.name}
                            status={i.status}
                            notifications={i.notifications}
                            src={i.avatar}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

List.propTypes = {
    items: PropTypes.array,
    label: PropTypes.shape({
        text: PropTypes.string,
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
