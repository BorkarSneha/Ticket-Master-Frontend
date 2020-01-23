import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import swal from 'sweetalert'
import {startRemoveCustomer} from '../../actions/customers'
function  CustomerList (props){
    

const handleRemove = (id)=>{
    props.dispatch(startRemoveCustomer(id))
}

    
    return(
        <div >
         <div align="center">
         <h2>Listing Customers-{props.customers.length}</h2>
         </div>
          
          <table class="table table-striped">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Action</th>
                      <th>Edit</th>
                      <th>Remove</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      props.customers.map((customer)=>{
                          return(
                              <tr key={customer._id}>
                                  <td><Link to={`customers/${customer._id}`}>{customer.name}</Link></td>
                                  <td>{customer.email}</td>
                                  <td>{customer.mobile}</td>
                                  <td><Link to={`customers/${customer._id}`} className="btn btn-secondary">Show</Link></td>
                                  <td><Link to={`/customers/edit/${customer._id}`} className="btn btn-primary">Edit</Link><br/></td>

                                  <td><button onClick={()=>{
                                    
                                    swal({
                                        title: "Are you sure?",
                                        text: "Once deleted, you will not be able to recover this data!",
                                        icon: "warning",
                                        buttons: true,
                                        dangerMode: true,
                                      })
                                      .then((willDelete) => {
                                        if (willDelete) {
                                            handleRemove(customer._id)
                                          swal("Poof! Your data has been deleted!", {
                                            icon: "success",
                                          });
                                        } else {
                                          swal("Your data is safe!");
                                        }
                                      });
                                      
                                      }}className="btn btn-danger">Remove</button></td>
                              </tr>
                          )
                      })
                  }
              </tbody>
          </table>
          <Link to="/customers/new" className="btn btn-primary">Add Customer</Link>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        customers:state.customers
    }
}
export default connect(mapStateToProps)(CustomerList)
