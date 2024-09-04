import toast from "react-hot-toast";
const axios = require("axios");
import Cookies from "js-cookie";



 export async function handleApi(url="/",method="get",bodyData=null,params={},isAuth=true,isFormData=false,router){
    
    try{
    const config={
        method:method.toUpperCase(),
        url:url,
        baseUrl:process.env.NEXT_PUBLIC_API_ENDPOINT,
        body:bodyData,
        params:params,
        headers:{},
    }

    if(isFormData){
        config.headers["Content-Type"] = "multipart/form-data";
    }else{
        config.headers["Content-Type"] = "application/json";
    }

    if(isAuth){
        const token = Cookies.get("token");
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    const response=await axios(config)

    return response.data
    }catch(error){

        if (error?.response?.data === "Unauthorized") {
            Cookies.remove("token");
            localStorage.remove("token");
            router?.push("authentication/sign-in");
            toast?.error(error?.response?.data);
            return false;
          }
          console.log("error",error)
        toast.error(error?.response?.data?.errors?.msg);
    }


}
