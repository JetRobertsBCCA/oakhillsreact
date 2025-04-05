// app/routes/admin-events.tsx
import React from 'react';
import { useAuth } from '../../admin-portal/src/AuthProvider.jsx'; // Adjust the path as necessary
import AdminEvents from '../../admin-portal/src/AdminEvents'; // Adjust the path as necessary
import { Navigate } from 'react-router-dom';

export default function AdminEventsPage() {
    const { user } = useAuth();

    // Redirect to login if user is not authenticated
    if (!user) {
        return <Navigate to="/adminlogin" />;
    }

    return <AdminEvents />;
}
