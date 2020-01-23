import React from 'react'
import {connect} from 'react-redux'
import {startRegisterUser} from '../../actions/user'
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            email:'',
            password:''
        }
    }

handleSubmit = (e) =>{
 e.preventDefault()
 const formData={
     username:this.state.username,
     email:this.state.email,
     password:this.state.password
 }
 this.props.dispatch(startRegisterUser(formData,this.props))

}
handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}

render(){
    return(
        <div className="col-md-6 offset-md-3">
          <div align="center">
          <h2>Register</h2>
          </div>
          <form onSubmit={this.handleSubmit}>
              <label>
              </label> <br/>
              <input type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="Username"className="form-control"/>
              <label>  
              </label> <br/>
              <input type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Email"className="form-control"/>
              <label>
              </label> <br/>
              <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password"className="form-control"/>
              <br/>
              <input type="submit" class="btn btn-primary btn-lg btn-block"/>
          </form>
            
        </div>
    )
}

}
export default connect()(Register)