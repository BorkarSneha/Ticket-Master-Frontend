import React from 'react'
import {connect} from 'react-redux'
import {startLoginUser} from '../../actions/user'
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }

handleSubmit = (e) =>{
 e.preventDefault()
 const formData={
     email:this.state.email,
     password:this.state.password
 }
 this.props.dispatch(startLoginUser(formData,this.props))
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
            <h2>Login</h2>
            </div>
          
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
              <label>
              </label> <br/>
                    <input type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Email"className="form-control"/>
              <label>     
              </label>
                     <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password"className="form-control"/>
              <br/>
              <input type="submit" class="btn btn-primary btn-lg btn-block"/>
              </div>
          </form>
            
        </div>
    )
}
}
export default connect() (Login)