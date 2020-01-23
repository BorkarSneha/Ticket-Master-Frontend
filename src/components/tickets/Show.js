import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'

function TicketShow(props)
{
    return(
            <div>
                {
                    !_.isEmpty(props.ticket) && 
                    <div>
                        <h3>Code Number - {props.ticket.code}</h3>
                        {console.log(props.ticket,9)}
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-success">Customer - {props.ticket.customer.name}</li>
                            <li class="list-group-item list-group-item-success">Department - {props.ticket.department.name}</li>
                            <li class="list-group-item list-group-item-success">Message - {props.ticket.message}</li>
                            <li class="list-group-item list-group-item-success">Priority - {props.ticket.priority}</li>
                        </ul><br/>
                        <Link to = {`/tickets/edit/${props.ticket._id}`} className = "btn btn-primary">Edit</Link>
                    </div>
                }
                
                <Link to = "/tickets" className = "btn btn-dark">Back</Link>           
            </div>
        )
}
const mapStateToProps = ( state,props ) =>
{
    return({
        ticket : state.tickets.find(ticket => ticket._id === props.match.params.id)
    })
}

export default connect(mapStateToProps)(TicketShow)

