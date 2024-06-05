import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../hooks/useAuth.tsx";

const AppRouterPrivate = () => {
    const auth = useAuth();

    return auth.isAuthenticated ? <Outlet/> : <Navigate to="/login"/>;
};

export default AppRouterPrivate;