import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PuffLoader } from "react-spinners";



const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    let location = useLocation();

    if(loading){
       return <div className="flex justify-center items-center min-h-[calc(100vh-230px)]  ">
        <PuffLoader className="flex items-center mt-[64px]"
          color="#ff5154"
          // loading={loading}

          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;