import React from 'react'
import EmployeeForm from './Form'
import _ from 'lodash'
import {startEditEmployee} from '../../actions/employees'
import {connect} from 'react-redux'
function EmployeeEdit (props){

   const handleSubmit=(formData)=>
      {
        props.dispatch(startEditEmployee(formData,props))
      }
    
        return(
            <div>      
              {
                  !_.isEmpty(props.employee)&&(
                    <div className="col-md-6 offset-md-3">
                      <div align="center">
                    <h2>Edit Employee-{props.employee.name}</h2>
                    </div>
                    {
                    <EmployeeForm {...props.employee} handleSubmit={handleSubmit} />
                    }
                    </div>
                  )
              }  
            </div>
        )
    }


const mapStateToProps=(state,props)=>{
      return{
          employee:state.employees.find(employee=>employee._id==props.match.params.id)
      }
}
export default connect(mapStateToProps)(EmployeeEdit)
