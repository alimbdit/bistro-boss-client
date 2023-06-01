
import { Navigate, useLocation } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";



const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin()
    let location = useLocation();

    if(loading || isAdminLoading){
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

    if(user && isAdmin){
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;