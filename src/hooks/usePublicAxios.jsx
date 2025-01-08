import axios from "axios";

export const instance = axios.create({
  baseURL: "https://bistro-boss-server-eight-lilac.vercel.app",
  // baseURL: "http://localhost:5000",
});
const usePublicAxios = () => {
    return instance
};

export default usePublicAxios;