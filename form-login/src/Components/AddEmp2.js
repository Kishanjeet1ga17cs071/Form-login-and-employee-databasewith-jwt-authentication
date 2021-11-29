import React, { useState } from "react";
import axiox from "axios";
import './Login2.css' ;
import {useLocation,useNavigate} from 'react-router-dom';

const AddEmp = () => {
    const location = useLocation();
    const [employee_salary, sete] = useState(location.state.employee_salary);
    const [employee_age, seta] = useState(location.state.employee_age);
    const [profile_image, setai] = useState(location.state.employee_name);
    const [employee_name, setn] = useState("");
   
    let history=useNavigate();
    
    const submit=(e)=>{
        e.preventDefault();
        axiox
          .put(`http://localhost:3000/data/${location.state.id}`, {
           
            employee_name,
            employee_salary,
            employee_age,
            
            
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
            <form className="form" onSubmit={submit} >
            
            <label>NAME</label>
            <input type="text" name="name"defaultValue={location.state.employee_name} onChange={(e) => setn(e.target.value)}/>
            <label>AGE</label>
            <input type="text" name="age"defaultValue={location.state.employee_age} onChange={(e) => seta(e.target.value)}/>
            <label>SALARY</label>
            <input type="text" name="salary"defaultValue={location.state.employee_salary} onChange={(e) => sete(e.target.value)}/>
            <button type="submit">ADD-EMPLOYEE</button>
            </form>
        </div>
    );
};

export default AddEmp;