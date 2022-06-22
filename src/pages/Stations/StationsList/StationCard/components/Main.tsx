import { AvatarGroup, Box, Button } from '@mui/material';
import Avatar from 'components/Avatar/Avatar';
import Text from 'components/Text';
import withContext from 'hoc/withContext';
import { Station } from 'types';
import StationContext from '../../StationContext';
import Card from './Card';
import Title from './Title';

const Main = ({
    id,
    name,
    avatar,
    status,
    members,
}: Pick<Station, 'id' | 'name' | 'avatar' | 'status' | 'members'>) => (
    <Card type="top">
        <Box
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flex: 1,
                padding: (theme) => `${theme.spacing(2)} ${theme.spacing(4)}`,
            }}
        >
            <Avatar
                name={name}
                src={avatar}
                status={status}
                sxProps={{
                    avatar: {
                        borderWidth: 4,
                        marginLeft: (theme) => theme.spacing(-6),
                        width: (theme) => theme.spacing(5.5),
                        height: (theme) => theme.spacing(5.5),
                    },
                    status: {
                        '& > .MuiBadge-badge': {
                            bottom: 12,
                            right: 12,
                        },
                    },
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    paddingLeft: (theme) => theme.spacing(1),
                }}
            >
                <Title />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flex: 1,
                    }}
                >
                    {members?.length && (
                        <AvatarGroup
                            max={4}
                            sx={(theme) => ({
                                marginLeft: theme.spacing(2),
                                '.MuiAvatar-root': {
                                    marginLeft: theme.spacing(-2),
                                },
                            })}
                        >
                            {members.map((i) => (
                                <Avatar
                                    key={`member_${id}_${i.id}`}
                                    name={i.name}
                                    src={i.avatar}
                                    sxProps={{
                                        avatar: (theme) => ({
                                            width: theme.spacing(3),
                                            height: theme.spacing(3),
                                        }),
                                    }}
                                />
                            ))}
                        </AvatarGroup>
                    )}
                    <Button
                        variant="contained"
                        color="accent"
                        onClick={(e) => console.log('sending truck...')}
                    >
                        <Text text="Send truck" name="SendTruck" />
                    </Button>
                </Box>
            </Box>
        </Box>
    </Card>
);

export default withContext(StationContext)(Main);
