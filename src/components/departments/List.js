import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startRemoveDepartment} from '../../actions/departments'
import swal from 'sweetalert'




function DepartmentList(props){
    

const handleRemove = (id)=>{
    props.dispatch(startRemoveDepartment(id))
}

   const id=props.match.params.id
    return(
        
        <div>
            <div align="center">
          <h2>Listing Departments-{props.departments.length}</h2>
          </div>
          <table class="table table-striped">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Action</th>
                      <th>Edit</th>
                      <th>Remove</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      props.departments.map((department)=>{
                          return(
                              <tr key={department._id}>
                                  <td><Link to={`departments/${department._id}`}>{department.name}</Link></td>
                                  <td><Link to={`departments/${department._id}`} class="btn btn-secondary">Show</Link></td>
                                  <td><Link to={`/departments/edit/${department._id}`} class="btn btn-primary">Edit</Link></td>
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
                                            handleRemove(department._id)
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
         
          
          <Link to="/departments/new" className="btn btn-primary">Add Department</Link>
        
        </div>
        
    )
}
const mapStateToProps=(state)=>{
    return {
        departments:state.departments
    }
}
export default connect(mapStateToProps)(DepartmentList)

