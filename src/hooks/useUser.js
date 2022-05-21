import { useContext } from 'react';
import { UserContext } from 'providers/User';

const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within an UserProvider');
    }

    return {
        user: context.state,
    };
};

export default useUser;
