import React from 'react'
import {connect} from 'react-redux'
import TicketForm from './Form'
import {startAddTicket} from '../../actions/tickets'

function TicketNew (props){
    const handleSubmit=(formData)=>{
      props.dispatch(startAddTicket(formData,props))  
    }

    return (
        <div className="row">
        <div className="col-md-6 offset-md-3">
            <h2>Add Ticket</h2>
            <TicketForm handleSubmit={handleSubmit}></TicketForm>
        </div>
        </div>
    )
}

export default connect()(TicketNew)