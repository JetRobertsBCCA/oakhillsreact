// app/routes/login.tsx
import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { json, redirect } from '@remix-run/node';

const allowedEmails = [
    'njetroberts@gmail.com',
    'admin2@example.com',
    // Add more whitelisted emails here
];

export const loader = async () => {
    // Check if user is already authenticated
    const user = auth.currentUser;
    if (user) {
        return redirect('/admin-events'); // Redirect to admin events if already logged in
    }
    return json({});
};

const LoginPage = () => {
    const [error, setError] = useState('');

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const userEmail = result.user.email;

            if (!allowedEmails.includes(userEmail)) {
                setError('You are not authorized to access this portal.');
                await auth.signOut();
            } else {
                // Redirect to admin events page after successful login
                window.location.href = '/admin-events';
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default LoginPage;
