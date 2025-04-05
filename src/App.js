// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthProvider'; // Create an AuthProvider to manage authentication state
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import AdminEvents from './AdminEvents'; // Component for managing events
import ManageImages from './ManageImages'; // Component for managing images

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/admin-events" element={<ProtectedRoute component={AdminEvents} />} />
                    <Route path="/manage-images" element={<ProtectedRoute component={ManageImages} />} />
                    <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

// ProtectedRoute component to check authentication
const ProtectedRoute = ({ component: Component }) => {
    const user = useAuth(); // Implement useAuth to get the current user

    return user ? <Component /> : <Navigate to="/login" />;
};

export default App;
