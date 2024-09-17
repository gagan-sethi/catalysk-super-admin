import toast from "react-hot-toast";
const axios = require("axios");
import Cookies from "js-cookie";



 export async function handleApi(url="/",method="get",bodyData=null,params={},isAuth=true,isFormData=false,router){
    
    try{
        console.log(`API Endpoint: ${process.env.NEXT_PUBLIC_API_ENDPOINT}/${url}`);

        console.log("handleapisucess",bodyData)
        
    const config={
        method:method.toUpperCase(),
        url:`${process.env.NEXT_PUBLIC_API_ENDPOINT}/${url}`,
        data:bodyData,
        params:params,
        headers:{},
    }

    if(isFormData){
        config.headers["Content-Type"] = "multipart/form-data";
    }else{
        config.headers["Content-Type"] = "application/json";
    }

    if(isAuth){
        const token = localStorage.getItem("token");
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    const response=await axios(config)

    return response.data
    }catch(error){

        if (error?.response?.data === "Unauthorized") {
        //   Cookies.remove("token");
            localStorage.remove("token");
            // router?.push("authentication/sign-in");
            toast?.error(error?.response?.data);
            return false;
          }
          console.log("error",error)
        toast.error(error?.message);
    }


}


export function hello(){
    console.log("hello hello")
}