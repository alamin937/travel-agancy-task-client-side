import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../UseHooks/UseAuth"




const PrivateRoute = ({ children }) =>{
        
        const {user,loading} = UseAuth()
        let location = useLocation();

        if(loading) return <div style={{textAlign:'center'}}>Loading...</div>

        if(user?.email){
            return children;
        }
        else{
            return <Navigate to="/login" state={{ from: location }} replace />;
        }
}

export default PrivateRoute;