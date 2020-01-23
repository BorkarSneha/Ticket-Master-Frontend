import React from 'react'
import axios from 'axios'
import Select from 'react-select'
import {connect} from 'react-redux'
class TicketForm extends React.Component{
  constructor(props){
      console.log(props,999999)
      super(props)
      this.state={
        code: props.code? props.code: '',
            customer: props.customer? props.customer._id: '',
            department: props.department? props.department._id: '',
            emps: [],
            employee: props.employee? props.employee: [],
            employeesnew: [],
            message: props.message? props.message: '',
            priority: props.priority? props.priority: '',
            isPending : props.isPending ? props.isPending : true
      }
  }
  componentDidMount(){
    axios.get('http://localhost:3025/employees',{
        headers: {
            'x-auth': localStorage.getItem('authToken')
        }
    })
    .then(response=>{
        const employees = response.data
        let emps = []
        employees.map(employee=>{
            return (
                emps.push({
                    id: employee._id,
                    value: employee._id,
                    label: employee.name,
                    deptId: employee.department._id,
                })
            )
        })
        this.setState({emps})
    })   

}


  handleSubmit = (e) =>{
    e.preventDefault()
    const formData={
        code:this.state.code,
        customer:this.state.customer,
        department:this.state.department,
        employee:this.state.employee,
        message:this.state.message,
        priority:this.state.priority,
        isPending : this.state.isPending,
        employeesnew : []
    }
    console.log(formData,1234512345)
    this.props.ticket && (formData.id = this.props.ticket._id)
    this.props.handleSubmit(formData)
    
   }
   
   handleChange=(e)=>{
       this.setState({
           [e.target.name]:e.target.value
       })
       if(e.target.name === 'department'){
        this.setState({
       
       employeesnew:this.state.emps.filter(employee=>employee.deptId === e.target.value )
   })
}

   }
   handleMultiChange = (option) => {
    console.log('option', option)
    if(option !== null){
        this.setState(() => {
            return {
            employee: option.map(option=>Object.assign(option.id))
         }
     })
     console.log('employee', this.state.employee)
     console.log('option', option)
    }
}
   
render(){
    console.log(this.state.employeesnew,11111)
    return(
       <div>
           <form onSubmit={this.handleSubmit}>
               <div className="form-group">
              <label htmlFor="code">Code</label>
              <input type="text" value={this.state.code} onChange={this.handleChange} name="code" id="code" className="form-control"/>
             
              <label htmlFor="customer">Customer</label>
                <select name="customer" onChange = {this.handleChange} id="customer" className="form-control">
                    <option>select</option>
                   
                {
                    this.props.customers.map((customer)=>{
                        return(
                            <option key={customer._id} value = {customer._id}>{customer.name}</option>
                        )
                    })
                }
                 </select>  
    
              <label htmlFor="department">Department</label>
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

                {/* <label htmlFor="employee">Employees</label>
                <select name="employee" onChange = {this.handleChange} id="employee" className="form-control" multiple>

                    <option>select</option>
                   
                {
                    this.state.employees.map((employee)=>{
                        return(
                            <option key={employee._id} value = {employee._id}>{employee.name}</option>
                        )
                    })
                } 
                </select> */}
                <label>
                        Employees
                </label>
                            <Select
                                name="employee"
                                placeholder="Select"
                                options={this.state.employeesnew}
                                onChange={this.handleMultiChange}
                                isMulti
                            />
                <br/>
                <label htmlFor="message">Message</label>
                <textarea type="text" value={this.state.message} onChange={this.handleChange} name="message"  id="message" className="form-control">
                </textarea>
        
                <label>Priority</label><br/>
                <input type="radio" value="High" checked= {this.state.priority==="High"} onChange={this.handleChange} name="priority"/>{' '}High<br/>
                <input type="radio" value="Medium" checked= {this.state.priority==="Medium"} onChange={this.handleChange} name="priority"/>{' '}Medium<br/>
                <input type="radio" value="Low" checked= {this.state.priority==="Low"} onChange={this.handleChange} name="priority"/>{' '}Low<br/>   
                <br/>
                
              <input type="submit" class="btn btn-primary btn-lg btn-block"/>
              </div>
          </form>
       </div> 
    )
}
}
const mapStateToProps = ( state,props ) =>
{
    return({
        departments : state.departments,
        customers : state.customers
    })
}
export default connect(mapStateToProps)(TicketForm)