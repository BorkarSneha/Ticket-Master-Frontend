import React from 'react'
import { startRemoveTicket, startEditTicket } from '../../actions/tickets'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import Charts from './Chart'

function TicketCompleted(props)
{
    const empList = (employees) =>
    {
        const emps = []
        employees.forEach(e =>
        {
            const val = props.employees.find(emp => emp._id === e)
            !_.isEmpty(val) && emps.push(val.name)
        })
        return emps.join(',')
    }
    const handleRemove = (id) =>
    {
        props.dispatch(startRemoveTicket(id))
    }
    const handleChange = (ticket) =>
    {
        const formData = {
            isPending : true
        }
        props.dispatch(startEditTicket(formData, ticket._id))
        window.location.reload()
    }
    return(
        <div>
                    <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link" href="/tickets">Pending Tickets</a>
                    </li>
  
                    <li class="nav-item">
                        <a class="nav-link active" href="/tickets/completed-tickets">Completed Tickets</a>
                    </li>
                </ul><br/>
                {!_.isEmpty(props.tickets) &&
                <table className = "table table-striped table-hover">
                <thead className = "table-dark">
                    <tr>
                        <th>Code NO</th>
                        <th>Customer</th>
                        <th>Department</th>
                        <th>Employee</th>
                        <th>Message</th>
                        <th>Priority</th>
                        <th>Action</th>
                        <th>Remove</th>
                        <th>Complete</th>
                    </tr>
                </thead>
                <tbody>
                {
            
                    props.tickets.map((ticket)=>
                    {
                        return(
                            <tr key = {ticket._id}>
                                <td>{ticket.code}</td>
                                <td>{ticket.customer.name}</td>
                                <td>{ticket.department.name}</td>
                                <td>{
                                        !_.isEmpty(ticket.employee) && empList(ticket.employee)
                                    }</td>
                                <td>{ticket.message}</td>
                                <td>{ticket.priority}</td>
                                <td><Link className = "btn btn-primary" to = {`/tickets/${ticket._id}`}> Show </Link></td>
                                <td><button className = "btn btn-danger" onClick = {()=>
                                {

                                    handleRemove(ticket._id)
                                }}>Remove</button></td>
                                <td><input type = "checkbox" onChange = {() =>{
                                    handleChange(ticket)}
                                }/></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>}
            <Link to = "/tickets/new">Add Ticket</Link>
            <Charts/>
        </div>
    )
}
const mapStateToProps = ( state ) =>
{
    return({
        tickets : state.tickets.filter(ticket => !ticket.isPending ),
        employees : state.employees
    })
}
export default connect(mapStateToProps)(TicketCompleted)