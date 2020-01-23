import React from 'react';
import {BrowserRouter, Route ,Link, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'
import Home from './components/common/Home'
import Register from './components/users/Register'
import Login from './components/users/Login' 
import { startLogoutUser } from './actions/user'

import CustomerList from './components/customer/List'
import CustomerShow from './components/customer/Show'
import CustomerNew from './components/customer/New'
import CustomerEdit from './components/customer/Edit'

import EmployeeList from './components/employees/List'
import EmployeeShow from './components/employees/Show'
import EmployeeNew from './components/employees/New'
import EmployeeEdit from './components/employees/Edit'

import DepartmentList from './components/departments/List'
import DepartmentShow from './components/departments/Show'
import DepartmentNew from './components/departments/New'
import DepartmentEdit from './components/departments/Edit'

import TicketList from './components/tickets/List'
import TicketShow from './components/tickets/Show'
import TicketNew from './components/tickets/New'
import TicketEdit from './components/tickets/Edit'
import TicketCompleted from './components/tickets/CompletedTickets'

import image1 from './components/common/image1.png'

function App(props) {
   const handleLogout = () =>
   {
      props.dispatch(startLogoutUser())
   }
  return (
    <BrowserRouter>
    <div>
    <div className="container-fullwidth">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
     
       <Link to="/" className="navbar-brand mb-0 h1"><img src={image1} width="40" height="40" class="d-inline-block align-top" alt=""/>Ticket Master</Link>
      
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
       </button>
       

       <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
       <ul class="nav justify-content-end">
         <li class="navbar-nav">
           <Link  class=" nav-item nav-link active" to="/">Home<span class="sr-only">(current)</span></Link>
         </li>
        {
         !_.isEmpty(props.user) ?(
         <div>
           <li class="navbar-nav">
              <Link class="nav-item nav-link active" to="/customers">Customers <span class="sr-only">(current)</span></Link>
              <Link class="nav-item nav-link active" to="/employees">Employees <span class="sr-only">(current)</span></Link>
              <Link class="nav-item nav-link active" to="/departments">Department <span class="sr-only">(current)</span></Link>
              <Link class="nav-item nav-link active" to="/tickets">Tickets <span class="sr-only">(current)</span></Link>
              <Link class="nav-item nav-link active" to="#" onClick = {handleLogout}>Logout <span class="sr-only">(current)</span></Link>
              
            </li>
           </div>
        ):( 
         <div>
           <li class="navbar-nav">
              <Link class="nav-item nav-link active" to="/users/register">Register</Link>
              <Link class="nav-item nav-link active" to="/users/login">Login</Link>
            </li>
           
           </div>
        )}
       </ul>
       </nav>
       <br/>
       <br/>
       </div>
       <div className="container">
       <Switch>
       <Route path="/" component={Home} exact={true} />
       <Route path="/users/register" component={Register} exact={true} />
       <Route path="/users/login" component={Login} exact={true} />
       
       <Route path="/customers" component={CustomerList} exact={true} />
       <Route path="/customers/new" component={CustomerNew} exact={true} />    
       <Route path="/customers/edit/:id" component={CustomerEdit} exact={true}/>
       <Route path="/customers/:id" component={CustomerShow} exact={true} />

       <Route path="/employees" component={EmployeeList} exact={true} />
       <Route path="/employees/new" component={EmployeeNew} exact={true} /> 
       <Route path="/employees/edit/:id" component={EmployeeEdit} exact={true}/>
       <Route path="/employees/:id" component={EmployeeShow} exact={true} />

       <Route path="/departments" component={DepartmentList} exact={true}/>
       <Route path="/departments/new" component={DepartmentNew} exact={true}/>
       <Route path="/departments/edit/:id" component={DepartmentEdit} exact={true}/>
       <Route path="/departments/:id" component={DepartmentShow} exact={true}/>
       
       <Route path="/tickets" component={TicketList} exact={true} /> 
       <Route path="/tickets/new" component={TicketNew} exact={true} />  
       <Route path="/tickets/completed-tickets" component={TicketCompleted} exact={true}/>
       <Route path="/tickets/edit/:id" component={TicketEdit} exact={true} />   
       <Route path="/tickets/:id" component={TicketShow} exact={true} />   
    
       </Switch>
       </div>
    </div>
    </BrowserRouter>
  )
}
const mapStateToProps=(state)=>{
    return{
       user:state.user
    }
}
export default connect(mapStateToProps)(App)
