import React from 'react'
import CustomerForm from './Form'
import _ from 'lodash'
import {startEditCustomer} from '../../actions/customers'
import {connect} from 'react-redux'
function CustomerEdit (props){

   const handleSubmit=(formData)=>
      {
        props.dispatch(startEditCustomer(formData,props))
      }
    
        return(
            <div>      
              {
                  !_.isEmpty(props.customer)&&(
                    <div className="col-md-6 offset-md-3">
                      <div align="center"> 
                    <h2>Edit Customer-{props.customer.name}</h2>
                    </div>
                    {
                    <CustomerForm {...props.customer} handleSubmit={handleSubmit} />
                    }
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
export default connect(mapStateToProps)(CustomerEdit)
