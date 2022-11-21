import { User } from '~/types/User.interface';

export interface UserState {
    loading: false,
    user: User|null,
}

export default (): UserState => ({
    loading: false,
    user   : null,
});
