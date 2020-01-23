import React from 'react'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import {connect} from 'react-redux'
function CustomerShow(props){
   
    const id=props.match.params.id
    return(
        <div>
          {
              !_.isEmpty(props.customer)&&(
                  <div align="center">
                      <h2>{props.customer.name}-{props.customer.email}-{props.customer.mobile}</h2>
          
                      
                  </div>
              )
          }
          
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    return{
        customer:state.customers.find(customer=>customer._id==props.match.params.id)
    }
}
export default connect(mapStateToProps)(CustomerShow)
