// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useMenu = () => {
    // const [menu, setMenu] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //   fetch("http://localhost:5000/menu")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setMenu(data);
    //       setLoading(false);
    //     });
    // }, []);

    const axios = useAxios()

    const {data: menu = [], isLoading, refetch} = useQuery({
      queryKey: ["menu"],
      queryFn: async()=>{
        const res = await axios("/menu")
        // console.log(res.data);
        return res.data
      }
    })

    return [menu, refetch, isLoading];
};

export default useMenu;