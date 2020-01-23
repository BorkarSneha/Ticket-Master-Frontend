import React from 'react'
import {connect} from 'react-redux'
import DepartmentForm from './Form'
import {startAddDepartment} from '../../actions/departments'

function DepartmentNew (props){
    const handleSubmit=(formData)=>{
      props.dispatch(startAddDepartment(formData,props))  
    }

    return (
        <div className="row">
        <div className="col-md-6 offset-md-3">
            <h2>Add Department</h2>
            <DepartmentForm handleSubmit={handleSubmit}></DepartmentForm>
        </div>
        </div>
    )
}

export default connect()(DepartmentNew)