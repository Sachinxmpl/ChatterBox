import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ user, redirect }) => {
    if (!user) {
        return <Navigate to={redirect} />;
    }
    return <Outlet />;
};

export default ProtectedRoute;


