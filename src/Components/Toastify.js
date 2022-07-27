import { toast } from "react-toastify";

export const toastify=(text,type)=>{
    if(type==="success")
    {
        toast.success(text)
    }
    else if(type==="failed"){
        toast.error(text)
    }
}