import Wallet from './wallet-model';

interface User {
    email: string | undefined | null;
    wallet: Wallet;
    isFirstTimeLogged: boolean;
}

export default User;
