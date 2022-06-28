import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { ReactComponent as AccidentIcon } from 'assets/icons/accident.svg';
import Text from 'components/Text';
import { History, Sx } from 'types';
import AddressBox from './AddressBox';

interface Props {
    history: History[];
    selected?: History;
    onSelect: (history: History) => void;
    sx?: Sx;
}

const HistoryList = ({ history, selected, onSelect, sx }: Props) => (
    <List
        sx={[
            {
                marginY: (theme) => theme.spacing(1),
                background: (theme) => theme.palette.background.secondary,
                maxHeight: (theme) => theme.spacing(30),
                overflow: 'auto',
            },
            ...(Array.isArray(sx) ? sx : [sx]),
        ]}
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
                                color: (theme) => theme.palette.text.secondary,
                            }}
                            variant="bold"
                        />
                    }
                />
            </ListItem>
        ))}
    </List>
);

export default HistoryList;
