import React from 'react'
import DepartmentForm from './Form'
import _ from 'lodash'
import {startEditDepartment} from '../../actions/departments'
import {connect} from 'react-redux'
function DepartmentEdit (props){

   const handleSubmit=(formData)=>
      {
        props.dispatch(startEditDepartment(formData,props))
      }
    
        return(
            <div>      
              {
                  !_.isEmpty(props.department)&&(
                    <div className="col-md-6 offset-md-3">
                       <div align="center">
                    <h2>Edit Department-{props.department.name}</h2>
                    </div>
                    {
                    <DepartmentForm {...props.department} handleSubmit={handleSubmit} />
                    }
                    </div>
                  )
              }  
            </div>
        )
    }


const mapStateToProps=(state,props)=>{
      return{
          department:state.departments.find(department=>department._id==props.match.params.id)
      }
}
export default connect(mapStateToProps)(DepartmentEdit)
