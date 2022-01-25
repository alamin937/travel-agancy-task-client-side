import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../UseHooks/UseAuth"




const PrivateRoute = ({ children }) =>{
        const {user} = UseAuth()
        let location = useLocation();

        if(user?.email){
            return children;
        }
        else{
            return <Navigate to="/login" state={{ from: location }} replace />;
        }
}

export default PrivateRoute;