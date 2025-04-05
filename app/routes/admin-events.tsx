// app/routes/admin-events.tsx
import React from 'react';
import { requireAuth } from '../../utils/auth';

export const loader = async () => {
    await requireAuth();
    return null; // Proceed to render the component
};

const AdminEvents = () => {
    return (
        <div>
            <h1>Manage Events</h1>
            {/* Add functionality for adding/editing events here */}
        </div>
    );
};

export default AdminEvents;
