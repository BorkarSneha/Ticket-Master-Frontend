import React from 'react'
import { connect } from 'react-redux'

 class EmployeeForm extends React.Component{
  constructor(props){
      super(props)
      this.state={
          name:props.name?props.name:'',
          email:props.email?props.email:'',
          mobile:props.mobile?props.mobile:'',
          department : props.department ? props.department : '',
          employees:''
      }
  }


  handleSubmit = (e) =>{
    e.preventDefault()
    const formData={
        name:this.state.name,
        email:this.state.email,
        mobile:this.state.mobile,
        department:this.state.department
    }
    this.props.handleSubmit(formData)
   }
   
   handleChange=(e)=>{
       this.setState({
           [e.target.name]:e.target.value
       })
   }
   
render(){
    return(
       <div>
           <form onSubmit={this.handleSubmit}>
           <div className="form-group"> 
              <label htmlFor="name">
                  Name
              </label>
              <input type="text" value={this.state.name} onChange={this.handleChange} name="name" id="name" className="form-control"/>
              <br/>
              <label htmlFor="email">
                  Email   
              </label>
              <input type="text" value={this.state.email}  onChange={this.handleChange} name="email" id="email" className="form-control"/>
              <br/>
              <label htmlFor="mobile">
                  Mobile
              </label> 
              <input type="text" value={this.state.mobile}  onChange={this.handleChange} name="mobile" id="mobile"className="form-control"/>
              <br/>
              <label htmlFor="department">Deparment
              </label>
                <select name="department" onChange = {this.handleChange} id="department" className="form-control">
                    <option>select</option>
                   
                {
                    this.props.departments.map((department)=>{
                        return(
                            <option key={department._id} value = {department._id}>{department.name}</option>
                        )
                    })
                }

                </select>
               <br/>
              <input type="submit" class="btn btn-primary btn-lg btn-block"/>
              </div>
          </form>
       </div> 
    )
}
}

const mapStateToProps = ( state ) =>
{
    return({
        departments : state.departments
    })
}
export default connect(mapStateToProps)(EmployeeForm)