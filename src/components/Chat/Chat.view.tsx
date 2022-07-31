import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { ChatItemPropType } from '../../propTypes';
import { ChatItem } from '../../types';
import ChatLoader from './ChatLoader';
import List from './List';
import _ from 'lodash';

interface Props {
    chatsError: boolean;
    chatsLoading: boolean;
    chatsLoaded: boolean;
    station: ChatItem[];
    driver: ChatItem[];
}

const ChatView = ({
    chatsLoading,
    chatsLoaded,
    chatsError,
    station,
    driver,
}: Props) => (
    <>
        {!chatsError && (
            <Box
                sx={(theme) => ({
                    background: theme.palette.background.accent,
                    color: theme.palette.text.contrastText,
                    padding: theme.spacing(2),
                    borderRadius: theme.spacing(1),
                })}
            >
                {chatsLoading && <ChatLoader />}
                {chatsLoaded && (
                    <>
                        {!_.isEmpty(station) && (
                            <List
                                items={station}
                                label={{
                                    text: 'Stations',
                                    name: 'ChatStations',
                                }}
                                sx={{
                                    marginBottom: (theme) => theme.spacing(2),
                                }}
                            />
                        )}
                        {driver && (
                            <List
                                items={driver}
                                label={{
                                    text: 'Drivers',
                                    name: 'ChatDrivers',
                                }}
                            />
                        )}
                    </>
                )}
            </Box>
        )}
    </>
);

ChatView.propTypes = {
    chatsError: PropTypes.bool.isRequired,
    chatsLoading: PropTypes.bool.isRequired,
    chatsLoaded: PropTypes.bool.isRequired,
    station: PropTypes.arrayOf(ChatItemPropType.isRequired).isRequired,
    driver: PropTypes.arrayOf(ChatItemPropType.isRequired).isRequired,
};

export default ChatView;
