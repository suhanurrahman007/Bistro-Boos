// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const usePayment = () => {
  const axios = useAxios();

  const {
    data: payment = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const res = await axios("/payment");
      // console.log(res.data);
      return res.data;
    },
  });

  return [payment, refetch, isLoading];
};

export default usePayment;
