import React, { Component } from 'react'
import axios from 'axios'
import { ColumnDirective, ColumnsDirective, GridComponent,Page,Inject } from '@syncfusion/ej2-react-grids';

 class EmpDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sot:[]
        }
    }
    componentDidMount(){
        axios.get(' http://localhost:3000/data')
        .then(response=>{
            this.setState({
              sot:response.data
            })
        })  
        .then(error=>{
            console.log("error")
        })
      }
    render() {
        return (

            <div style={{margin: '10%', marginTop: '5%'}}>
             <GridComponent dataSource={this.state.sot} allowPaging={true} pageSettings={{pageSize : 10}}>
                
                
                 <ColumnsDirective>
                 <ColumnDirective field='id' headerText='ID' textAlign="Right" width="100"/>
                 <ColumnDirective field='employee_name' headerText='Name' width="150" />
                 <ColumnDirective field='employee_salary' headerText='Salary' textAlign="Justify" />
                 <ColumnDirective field='employee_age' headerText='Age' textAlign="Justify" />
                
          
                 </ColumnsDirective>
           <Inject services={[Page]} />
             </GridComponent>
            </div>
        )
    }
}

export default EmpDetails
