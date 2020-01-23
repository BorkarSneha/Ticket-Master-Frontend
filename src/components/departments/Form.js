import React from 'react'

export default class DepartmentForm extends React.Component{
  constructor(props){
      super(props)
      this.state={
          name:props.name?props.name:''
      }
  }
handleSubmit = (e) =>{
    e.preventDefault()
    const formData={
        name:this.state.name
    }
    this.props.handleSubmit(formData)
   }
   
handleChange = (e) =>
   {
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
              <input type="submit" class="btn btn-primary btn-lg btn-block"/>
            </div>
          </form>
       </div> 
    )
}
}
