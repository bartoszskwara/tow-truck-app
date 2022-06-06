import { useAppSelector } from 'app/store';
import { User } from 'app/User/userSlice';

const useUser = (): Partial<User> => {
    return useAppSelector(({ user: { user } }) => user) || {};
};

export default useUser;
