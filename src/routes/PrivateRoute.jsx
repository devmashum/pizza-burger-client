import { Navigate } from "react-router-dom";
import useAuth from "../utils/useAuth";


const PrivateRoute = ({ children }) => {
    const { user } = useAuth();

    if (!user?.email) {
        return <Navigate to={'/login'} />;

    }
    return children;
};

export default PrivateRoute;