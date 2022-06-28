import React from 'react';
import SimpleBar from 'simplebar-react';
import {
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@mui/material';
import { ReactComponent as AccidentIcon } from 'assets/icons/accident.svg';
import Text from 'components/Text';
import { History, Sx } from 'types';
import AddressBox from './AddressBox';
import 'simplebar/dist/simplebar.min.css';

interface Props {
    history: History[];
    selected?: History;
    onSelect: (history: History) => void;
    sx?: Sx;
}

const HistoryList = ({ history, selected, onSelect, sx }: Props) => (
    <Box sx={[...(Array.isArray(sx) ? sx : [sx])]}>
        <SimpleBar style={{ maxHeight: '300px' }}>
            <List
                sx={{
                    marginY: (theme) => theme.spacing(1),
                    background: (theme) => theme.palette.background.secondary,
                }}
            >
                {history.map((i) => (
                    <ListItem
                        key={`history_${i.id}`}
                        onClick={() => onSelect(i)}
                        sx={{
                            cursor: 'pointer',
                            ...(selected?.id === i.id
                                ? {
                                      background: (theme) =>
                                          theme.palette.background.primary,
                                  }
                                : {}),
                        }}
                    >
                        <ListItemAvatar>
                            <AccidentIcon />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Text
                                    text={<AddressBox {...i.address} />}
                                    variant="bold"
                                />
                            }
                            secondary={
                                <Text
                                    text={new Intl.DateTimeFormat().format(
                                        new Date(i.datetime)
                                    )}
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.text.secondary,
                                    }}
                                    variant="bold"
                                />
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </SimpleBar>
    </Box>
);

export default HistoryList;
