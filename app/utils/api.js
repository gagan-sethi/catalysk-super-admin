const axios = require('axios');
//import toast from 'react-hot-toast'
//import Cookies from "js-cookie";
const api_call= "https://betazone.promaticstechnologies.com/admin/"
export const makeApiCall = async (endpoint, method = 'GET', body = {}, queryParams = {} , authentication = false , formData = false) => {
    try {
        const config = {
          method: method.toUpperCase(),
          url: `${api_call}${endpoint}`,
          params: queryParams,
          data: body,
          headers: {
          },
        };

        if(formData){
          config.headers["Content-Type"]  = 'multipart/form-data'
        }else{
          config.headers["Content-Type"]  = 'application/json'
        }
    
        if(authentication){
          const token = localStorage.getItem('token');
          console.log(tokens)
          config.headers["Authorization"]  = `Bearer ${token}`
        }

        const response = await axios(config);
        return response.data;
      } catch (error) {
         console.log('API call error:', error?.response?.data?.message);
        // toast.error('test')
        if(error?.response?.data === "Unauthorized") {
       //   Cookies.remove("token")
       //   return toast.error(error?.response?.data?.message)
        }
        console.log('API call error:', error?.response?.data?.message);
       // toast.error(error?.response?.data?.message)
                //console.log('API call error:', error.response.data.message);

      }
}