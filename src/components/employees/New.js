import React from 'react'
import EmployeeForm from './Form'
import { connect } from 'react-redux'
import {startAddEmployee} from '../../actions/employees'
function EmployeeNew(props){
    const handleSubmit=(formData)=>{
       
        props.dispatch(startAddEmployee(formData,props))  
    }

    return (
        <div className="row">
        <div className="col-md-6 offset-md-3">
            <h2>Add Employee</h2>
            <EmployeeForm handleSubmit={handleSubmit}></EmployeeForm>
        </div>
        </div>
    )
}
export default connect()(EmployeeNew)