import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5000",
}); 
const useAxios = () => {
  instance.interceptors.request.use(function (config){
    const token = localStorage.getItem('access-token')
    console.log("request ", token);
    config.headers.authorization = `Bearer ${token}`
    return config
  }),(error) =>{
    return Promise.reject(error)
  }

  instance.interceptors.response.use(function(response){
    return response
  },(error) =>{
    const status = error
    console.log("Status is "), status;
    return Promise.reject(error)
  })
    return instance
};

export default useAxios;