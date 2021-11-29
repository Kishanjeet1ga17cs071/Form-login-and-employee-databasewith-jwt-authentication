import React from 'react';
import './EmployeGrid.css'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios'
import {  useNavigate, Link } from "react-router-dom";

function App() {

  let history = useNavigate();
  const actionButton =(p)=>{
    
    console.log(p.data.id)
   axios.delete(`http://localhost:3000/data/${p.data.id}`)
   .then(resp=>{
     console.log(resp)
   })
   .catch(error=>{
     console.log(error)
   })
   window.location.reload();
  }
  const editButton =(p)=>{
    history("/add2",{state:{id:p.data.id,employee_name:p.data.employee_name,employee_salary:p.data.employee_salary,employee_age:p.data.employee_age}})
      
    
  }
  const columnDefs= [
    { headerName: "ID", field: "id" },
    { headerName: "Name", field: "employee_name",}, 
    {headerName: "Salary",field: "employee_salary",},
    { headerName: "AGE", field: "employee_age" },
    {headerName: "Action",field:"id",
    cellRendererFramework:(p)=><div>
      <button  onClick={()=>actionButton(p)}>Delete</button>
    </div>},
     {headerName: "Update",field:"id",
     cellRendererFramework:(p)=><div>
       <button  onClick={()=>editButton(p)}>Edit</button>
     </div>}
    ]
 

const defaultColDef={
  sortable:true,
  editable:true,
  flex:1
  
}
 const handle=()=>{
  history("/add")
}

const onGridReady=(params)=>{
  console.log("grid is ready")
  fetch(" http://localhost:3000/data").then(resp=>resp.json())
  .then(resp=>{console.log(resp)
    params.api.applyTransaction({add:resp})})
}
  return (
    <div className="App">
      <h1 align="center">Employee-Details</h1>
     
      <div className="ag-theme-alpine" style={ {height: '400px'} }>
        <AgGridReact
            columnDefs={columnDefs}
            // rowData={rowData}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}
            pagination={true}
            paginationPageSize={5}
            >
           
        </AgGridReact>
        <button onClick={()=>handle()}>ADD-EMPLOYEE</button>
      </div>
    </div>
  );
}

export default App;