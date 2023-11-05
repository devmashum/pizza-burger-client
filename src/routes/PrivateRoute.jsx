import { Navigate } from "react-router-dom";
import useAuth from "../utils/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <span className="loading loading-spinner text-error"></span>;
    }
    if (!isLoading && !user?.email) {
        return <Navigate to={'/login'} />;

    }
    return children;
};

export default PrivateRoute;