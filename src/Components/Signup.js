import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Function
import { Validate } from "./Validate.js";
//Style
import styles from "../Styles/Signup.module.css";
//toastify

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {toastify} from "./Toastify";
const Signup = () => {
  /////////////////////////////////// States /////////////////////////////

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [touch, setTouch] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    isAccepted: false,
  });

  ///////////////////////////// Validation /////////////////////////////

  useEffect(() => {
    setErrors(Validate(data));
  }, [data]);

 
  ///////////////////////////// Functions /////////////////////////////

  const changeHandler = (e) => {
    if (e.target.name === "isAccepted") {
      setData({
        ...data,
        [e.target.name]: e.target.checked,
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  ////////

  const submitHandler = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      toastify("SignUp seccessfully","success")
    } else {
      toastify("SignUp Failed","failed")

      setTouch({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };
  ///////////

  const touchHandler = (event) => {
    setTouch({
      ...touch,
      [event.target.name]: true,
    });
  };

  ///////////////////////////// JSX /////////////////////////////

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <h1>SignUp</h1>
        <div className={styles.inputs}>
          <span>Name</span>
          <input
            name="name"
            placeholder="UserName"
            type="text"
            onChange={changeHandler}
            onFocus={touchHandler}
            value={data.name}
          />
          {errors.name && touch.name && (
            <span className={styles.errors}>{errors.name}</span>
          )}
        </div>

        {
          /////////////////////
        }

        <div className={styles.inputs}>
          <span>Email</span>
          <input
            name="email"
            placeholder="Template&@gmail.com"
            type="email"
            onChange={changeHandler}
            onFocus={touchHandler}
            value={data.email}
          />
          {errors.email && touch.email && (
            <span className={styles.errors}>{errors.email}</span>
          )}
        </div>

        {
          /////////////////////
        }

        <div className={styles.inputs}>
          <span>Password</span>
          <input
            name="password"
            placeholder="Password"
            type="password"
            onChange={changeHandler}
            onFocus={touchHandler}
            value={data.password}
          />
          {errors.password && touch.password && (
            <span className={styles.errors}>{errors.password}</span>
          )}
        </div>

        {
          /////////////////////
        }

        <div className={styles.inputs}>
          <span>confirmPassword</span>
          <input
            name="confirmPassword"
            placeholder="ConfirmPassword"
            type="text"
            onChange={changeHandler}
            onFocus={touchHandler}
            value={data.confirmPassword}
          />
          {errors.confirmPassword && touch.confirmPassword && (
            <span className={styles.errors}>{errors.confirmPassword}</span>
          )}
        </div>

        {
          /////////////////////
        }

        <div className={styles.policy}>
          <div>
            <span>I accepted terms of privacy policy</span>
            <input
              name="isAccepted"
              type="checkbox"
              onChange={changeHandler}
              onFocus={touchHandler}
              value={data.isAccepted}
            />
          </div>

          {errors.isAccepted && touch.isAccepted && (
            <span className={styles.errors}>{errors.isAccepted}</span>
          )}
        </div>

        {
          /////////////////////
        }

        <div className={styles.links}>
        
            <Link to="/signin">Signin</Link>
         
          <button type="submit" >
           
            
            SignUp</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
