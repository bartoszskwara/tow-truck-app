import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Accident from './Accident';

const Accidents = ({ sx }) => {
    const [accidents, setAccidents] = useState([]);
    const [expanded, setExpanded] = useState(null);

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
