import React, { useContext } from 'react';
import { RoomContext } from '../Auth/AuthProvider';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { Navigate, useLocation } from 'react-router-dom';
const RequireAuth = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(RoomContext);
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;