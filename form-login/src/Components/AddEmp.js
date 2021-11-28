import React, { useState } from "react";
import axiox from "axios";
import './Login2.css' ;
import {useNavigate} from 'react-router-dom';

const AddEmp = () => {
    const [id, setid] = useState("");
    const [employee_salary, sete] = useState("");
    const [employee_age, seta] = useState("");
    const [profile_image, setai] = useState("");
    const [employee_name, setn] = useState("");
    let history=useNavigate();
    const submit=(e)=>{
        e.preventDefault();
        axiox
          .post("http://localhost:3000/data", {
            
            employee_salary,
            employee_age,
            employee_name,
            
            profile_image
          })
          .then((response)=>{
              console.log("response",response)
          })
          .catch((error=>{
              console.log("error",error)
          }))
          history("/Grid")

    }
    return (
        <div>
            <form className="form" onSubmit={submit}>
            
            <label>NAME</label>
            <input type="text" name="name" onChange={(e) => setn(e.target.value)}/>
            <label>AGE</label>
            <input type="text" name="age" onChange={(e) => seta(e.target.value)}/>
            <label>SALARY</label>
            <input type="text" name="salary" onChange={(e) => sete(e.target.value)}/>
            <button type="submit">ADD-EMPLOYEE</button>
            </form>
        </div>
    );
};

export default AddEmp;