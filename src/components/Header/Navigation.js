import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Text from '../Text';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.primary,
}));
const StyledText = styled(Text)(({ theme, active }) => ({
    fontSize: theme.spacing(1.6),
    marginRight: theme.spacing(6),
    ...(!active ? { color: theme.palette.text.secondary } : {}),
}));

const Navigation = ({ sx }) => {
    //const [activeTab, setActiveTab] = useState('home');
    return (
        <Box
            component="nav"
            sx={[
                {
                    textTransform: 'uppercase',
                    display: 'flex',
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            <StyledNavLink to="/">
                {({ isActive }) => (
                    <StyledText
                        text="Home"
                        name="NavigationHome"
                        //variant={isActive ? 'bold' : 'light'}
                        active={isActive}
                    />
                )}
            </StyledNavLink>
            <StyledNavLink to="/stations">
                {({ isActive }) => (
                    <StyledText
                        text="Stations"
                        name="NavigationStations"
                        //variant={isActive ? 'bold' : 'light'}
                        active={isActive}
                    />
                )}
            </StyledNavLink>
            <StyledNavLink to="/settings">
                {({ isActive }) => (
                    <StyledText
                        text="Settings"
                        name="NavigationSettings"
                        //variant={isActive ? 'bold' : 'light'}
                        active={isActive}
                    />
                )}
            </StyledNavLink>
        </Box>
    );
};

Navigation.propTypes = {
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

export default Navigation;
