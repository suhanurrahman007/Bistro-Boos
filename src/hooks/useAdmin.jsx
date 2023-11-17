import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useAdmin = () => {
    const {user} = useAuth()
    console.log(user?.email);
    const axios = useAxios()

    const {data : isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async()=>{
            const res = await axios.get(`/user/admin/${user?.email}`);
            console.log(res.data);
            return res.data.admin
        }
    })

    return [isAdmin, isAdminLoading]
};

export default useAdmin;