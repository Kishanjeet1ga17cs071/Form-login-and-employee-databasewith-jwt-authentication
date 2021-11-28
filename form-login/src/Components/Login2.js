import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {  useNavigate, Link } from "react-router-dom";
import axiox from "axios";
import './Login2.css' ;
const Login2 = () => {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let history = useNavigate();
    const login = (e) => {
        e.preventDefault();
        axiox
          .post("http://localhost:5000/api/auth/login", {
            email,
            password,
          })
          .then((response) => {
            console.log("response", response);
            localStorage.setItem(
              "login",
              JSON.stringify({
                userLogin: true,
                token: response.data.access_token,
              })
            );
            setError("");
            setEmail("");
            setPassword(""); 
            history("/Grid");
          })
          .catch((error) => setError(error.response.data.message));
        }
    return (
        <div>
             <form className="form" onSubmit={login}>
             {error && <p style={{ color: "red" }}>{error}</p>}
                    <label>EmailId</label>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" >Submit</button>
                </form>
        </div>
    );
};

export default Login2;
