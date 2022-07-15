import React,{useState, useEffect} from 'react';

//Function
import { Validate } from "./Validate.js";
const Signup = () => {

    /////////////////////////////////// States /////////////////////////////

    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false,
    })
    const [errors,setErrors]=useState({})

    ///////////////////////////// Validation /////////////////////////////

   useEffect(()=>{
       setErrors(Validate(data))
       console.log(data)
   },[data])


    ///////////////////////////// Functions /////////////////////////////

    const changeHandler=(e)=>{
     if(e.target.name === "isAccepted")
     {
        setData({
            ...data, 
            [e.target.name]:e.target.checked
        })

     }
     else{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
     }
    }
    
   
    
    return (
        <div>
          
            <div>
                <span>Name</span>
                <input name='name' placeholder='UserName'  type="text" onChange={changeHandler} value={data.name}/>
              
            </div>
            <div>
                <span>Email</span>
                <input name='email' placeholder='Email'  type="email"  onChange={changeHandler} value={data.email}/>
            </div>
            <div>
                <span>Password</span>
                <input name='password' placeholder='Password'  type="password"  onChange={changeHandler} value={data.password}/>
            </div>
             <div>
                <span>confirmPassword</span>
                <input name='confirmPassword' placeholder='ConfirmPassword'  type="text"  onChange={changeHandler} value={data.confirmPassword}/>
            </div>
            <div>
                <span>I accepted terms of privacy policy</span>
                <input name='isAccepted'  type="checkbox"  onChange={changeHandler} value={data.isAccepted}/>
            </div>
           <div>
            <a>SignIn</a>
            <button>SignUp</button>
           </div>
           
            
        </div>
    );
};

export default Signup;