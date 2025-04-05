// app/routes/home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';

const HomePage = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signOut();
        navigate('/login');
    };

    return (
        <div>
            <h1>Welcome to the Admin Portal</h1>
            <button onClick={() => navigate('/admin-events')}>Manage Events</button>
            <button onClick={() => navigate('/manage-images')}>Manage Images</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default HomePage;
