// app/utils/auth.ts
import { redirect } from '@remix-run/node';
import { auth } from '../app/firebaseConfig';

export const requireAuth = async () => {
    const user = auth.currentUser;
    if (!user) {
        return redirect('/login');
    }
    return user;
};
