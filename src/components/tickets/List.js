import React from 'react'
import { startRemoveTicket, startEditTicket } from '../../actions/tickets'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import Charts from './Chart'
import swal from 'sweetalert'

class TicketList extends React.Component
{
    empList = (employees) =>
    {
        
        const emps = []
        employees.forEach(e =>
        {
            const val = this.props.employees.find(emp => emp._id === e)
            emps.push(val.name)
        })
        return emps.join(',')
    }
    handleRemove = (id) =>
    {
        this.props.dispatch(startRemoveTicket(id))
    }
    handleChange = (ticket) =>
    {
        const formData = {
            isPending : false
        }
        this.props.dispatch(startEditTicket(formData, ticket._id))
    }
    render()
    {
        return(
            <div>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="/tickets">Pending Tickets</a>
                    </li>
  
                    <li class="nav-item">
                        <a class="nav-link" href="/tickets/completed-tickets">Completed Tickets</a>
                    </li>
                </ul><br/>
            
            <table className="table table-striped">
                <thead >
                    <tr>
                        <th>Code NO</th>
                        <th>Customer</th>
                        <th>Department</th>
                        <th>Employee</th>
                        <th>Message</th>
                        <th>Priority</th>
                        <th>Action</th>
                        <th>Remove</th>
                        <th>Not Complete</th>
                    </tr>
                </thead>
                <tbody>
                {
            
                    this.props.tickets.map((ticket)=>
                    {
                        console.log(this.emps,97)
                        return(
                            <tr key = {ticket._id}>
                                <td>{ticket.code}</td>
                                <td>{ticket.customer.name}</td>
                                <td>{ticket.department.name}</td>
                                <td>{
                                        !_.isEmpty(ticket.employee) && this.empList(ticket.employee)
                                    
                                    }</td>
                                <td>{ticket.message}</td>
                                <td>{ticket.priority}</td>
                                <td><Link className = "btn btn-primary" to = {`/tickets/${ticket._id}`}> Show </Link></td>
                                <td><button className = "btn btn-danger" onClick = {()=>
                                {
                                   return swal({
                                        title: "Are you sure?",
                                        text: "Once deleted, you will not be able to recover this data!",
                                        icon: "warning",
                                        buttons: true,
                                        dangerMode: true,
                                      })
                                      .then((willDelete) => {
                                        
                                        if (willDelete) {
                                            this.handleRemove(ticket._id)
                                          swal("Poof! Your data has been deleted!", {
                                            icon: "success",
                                          });
                                        } else {
                                          swal("Your data is safe!");
                                        }
                                      });

                                    
                                }}>Remove</button></td>
                                <td><input type = "checkbox" onChange = {() =>{
                                    this.handleChange(ticket)}
                                }/></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <Link to = "/tickets/new" className="btn btn-primary">Add Ticket</Link>
            <Charts/>
            </div>
        )
    }
}
const mapStateToProps = ( state ) =>
{
    return({
        tickets : state.tickets.filter(ticket => ticket.isPending),
        employees : state.employees
    })
}

export default connect(mapStateToProps)(TicketList)