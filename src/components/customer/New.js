import React from 'react'
import {connect} from 'react-redux'
import CustomerForm from './Form'
import {startAddCustomer} from '../../actions/customers'

function CustomerNew (props){
    const handleSubmit=(formData)=>{
      props.dispatch(startAddCustomer(formData,props))  
    }

    return (
        <div className="row">
        <div className="col-md-6 offset-md-3">
        <h2>Add Customer</h2>
            <CustomerForm handleSubmit={handleSubmit}></CustomerForm>
        </div>
        </div>
    )
}

export default connect()(CustomerNew)