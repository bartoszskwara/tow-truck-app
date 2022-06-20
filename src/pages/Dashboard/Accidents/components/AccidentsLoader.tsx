import { Box } from '@mui/material';
import Loader from 'components/Loader';

const AccidentsLoader = () => (
    <Box
        sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: (theme) => theme.spacing(2),
            justifyContent: 'flex-start',
        }}
    >
        <Loader
            key={`acc_loader_top`}
            sx={{ height: (theme) => theme.spacing(30) }}
        />
        {Array(5)
            .fill(0)
            .map((_, i) => (
                <Loader
                    key={`acc_loader_${i}`}
                    sx={{
                        height: (theme) => theme.spacing(7),
                        borderRadius: (theme) => theme.spacing(1),
                    }}
                />
            ))}
    </Box>
);

export default AccidentsLoader;
