import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startRemoveEmployee} from '../../actions/employees'
import swal from 'sweetalert'

function EmployeeList (props)
{
    


const handleRemove = (id)=>{
        props.dispatch(startRemoveEmployee(id))
}
const findDepartment=(id) =>
 {

     return props.departments.find(dept => dept._id == id)
}

    return(
        <div>
            <div align="center">
          <h2>Listing Employees-{props.employees.length}</h2>
          </div>
          <table className="table table-striped">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Department</th>
                      <th>Action</th>
                      <th>Edit</th>
                      <th>Remove</th>
                  </tr>
              </thead>
              <tbody>
                 
                { 
                
                      props.employees.map((employee)=>{
                          return(
                   
                              <tr key={employee._id}>
                                  <td><Link to={`employees/${employee._id}`}>{employee.name}</Link></td>
                                  <td>{employee.email}</td>
                                  <td>{employee.mobile}</td>
                                  <td> {employee.department ? employee.department.name : findDepartment(employee.department).name} 
                                     </td>
                                  
                                  <td><Link to={`employees/${employee._id}`} class="btn btn-secondary">Show</Link></td>
                                  <td> <Link to={`/employees/edit/${employee._id}`} class="btn btn-primary">Edit</Link></td>
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
                                            handleRemove(employee._id) 
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
          <Link to="/employees/new" className="btn btn-primary">Add Employee</Link>
        </div>
        
    )
}

const mapStateToProps=(state)=>{
    return {
        employees:state.employees,
        departments:state.departments
    }
}
export default connect(mapStateToProps)(EmployeeList)

