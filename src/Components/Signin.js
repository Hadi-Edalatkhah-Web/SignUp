import React, { useState, useEffect } from "react";

//React Router dom
import { Link } from "react-router-dom";


//Validate
import { loginValidate } from "./LoginValidate";


//Style
import styles from "../Styles/Signup.module.css";

//Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {toastify} from "./Toastify";




/////////////////////////////  Main   /////////////////////////////////////
const Signin = () => {
  /////////////////////////////////// States /////////////////////////////

  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [touch, setTouch] = useState({
    email: false,
    password: false,
  });

  ///////////////////////////// Functions /////////////////////////////

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const touchHandler = (event) => {
    setTouch({
      [event.target.name]: true,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(Object.keys(errors).length===0)
    {
      toastify("SignUp seccessfully","success")
    }
    else
    {
      toastify("SignUp Failed","failed")

      setTouch({
        email: true,
        password: true,
      });
    }
   
  };
  ///////////////////////////// UseEffect /////////////////////////////

  useEffect(() => {
    setErrors(loginValidate(data));
    console.log(errors);
  }, [data]);

  /////////////////////////////////// JSX /////////////////////////////

  return (
    <div className={styles.container}>
      <form onClick={submitHandler}>
        <h1>SignIn</h1>
        
        {
          /////////////////////
        }

        <div className={styles.inputs}>
          <span>Email</span>
          <input
            name="email"
            placeholder="Template@gmail.com"
            type="email"
            onChange={changeHandler}
            onFocus={touchHandler}
            value={data.email}
          />
          {errors.email && touch.email && <span  className={styles.errors}>{errors.email}</span>}
        </div>
        
        {
          /////////////////////
        }

        <div  className={styles.inputs}>
          <span>Password</span>
          <input
            name="password"
            placeholder="Password"
            type="password"
            onChange={changeHandler}
            onFocus={touchHandler}
            value={data.password}
          />
          {errors.password && touch.password && <span className={styles.errors}>{errors.password}</span>}
        </div>
        
        {
          /////////////////////
        }

        <div className={styles.links}>
          <Link to="/">SignUp</Link>
          <button type="submit">Signin</button>
        </div>
      </form>
      <ToastContainer />

    </div>
  );
};

export default Signin;
