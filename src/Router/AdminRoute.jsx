import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({children}) => {

    const {user, isLoading} = useAuth()
    const [isAdmin , isAdminLoading] =  useAdmin()


    const location = useLocation();
    console.log(location);
    if (isLoading || isAdminLoading) {
      return (
        <div>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      );
    }

    if (user && isAdmin) {
      return children;
    }

    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
};

export default AdminRoute;