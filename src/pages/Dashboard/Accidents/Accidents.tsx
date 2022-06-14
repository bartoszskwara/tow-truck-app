import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { Accident as AccidentType } from 'types';
import Accident from './Accident';

interface Props {
    sx?: SxProps<Theme>;
}

const Accidents = ({ sx }: Props) => {
    const [accidents, setAccidents] = useState<AccidentType[]>([]);
    const [expanded, setExpanded] = useState<number | null>(null);

    useEffect(() => {
        const fetchAccidents = async () => {
            const response = await fetch('./mockApi/accidents.json').then(
                (res) => res.json()
            );
            if (response) {
                const data = response.accidents;
                setAccidents(data);
            }
        };
        fetchAccidents();
    }, []);

    return (
        <Box
            sx={[
                { display: 'flex', flexDirection: 'column' },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            {accidents.map((item, index) => (
                <Accident
                    key={item.id}
                    expanded={expanded === item.id || index === 0}
                    mostRecent={index === 0}
                    onClick={
                        index !== 0
                            ? () =>
                                  setExpanded((prev) =>
                                      prev === item.id ? null : item.id
                                  )
                            : undefined
                    }
                    {...item}
                />
            ))}
        </Box>
    );
};

Accidents.propTypes = {
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

export default Accidents;
