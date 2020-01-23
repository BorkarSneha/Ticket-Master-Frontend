import React from 'react'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import {connect} from 'react-redux'
function EmployeeShow (props){


    const id=props.match.params.id
    return(
        <div>
            {
                !_.isEmpty(props.employee)&&(
                    <div align="center">
                        <h2>{props.employee.name}-{props.employee.email}-{props.employee.mobile}-{props.employee.department.name}</h2>
                        
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
export default connect(mapStateToProps)(EmployeeShow)
