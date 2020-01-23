import React from 'react'
import TicketForm from './Form'
import _ from 'lodash'
import {startEditTicket} from '../../actions/tickets'
import {connect} from 'react-redux'
function TicketEdit (props){
   const handleSubmit=(formData)=>
      {
        props.dispatch(startEditTicket(formData,props))
      }
    
        return(
          
            <div>      
              {
                  !_.isEmpty(props.ticket)&&(
                    <div className="col-md-6 offset-md-3">
                      <div align="center"> 
                    <h2>Edit Ticket-{props.ticket.name}</h2>
                    </div>
                    {
                    <TicketForm {...props.ticket} handleSubmit={handleSubmit} />
                    }
                    </div>
                  )
              }  
            </div>
        )
    }


const mapStateToProps=(state,props)=>{
      return{
          ticket:state.tickets.find(ticket=>ticket._id==props.match.params.id)
      }
}
export default connect(mapStateToProps)(TicketEdit)
