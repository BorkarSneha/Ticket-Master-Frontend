import React from 'react'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import {connect} from 'react-redux'
function DepartmentShow(props){
   
    const id=props.match.params.id
    return(
        <div>
          {
              !_.isEmpty(props.department)&&(
                  <div align="center">
                      <h2>{props.department.name}</h2>
          
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
export default connect(mapStateToProps)(DepartmentShow)
