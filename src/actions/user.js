import axios from 'axios'
import {setCustomers} from './customers'
import {setDepartments} from './departments'
import {setEmployees} from './employees'
import {setTickets} from './tickets'
import swal from 'sweetalert'

export const setUser=(user= {})=>{
    console.log(user,888)
    return{
        type:'SET_USER',
        payload:user
    }

}
export const startRegisterUser=(formData,props)=>{
    return(dispatch)=>{
        axios.post('http://localhost:3025/users/register',formData)
 
        .then((response)=>{
            console.log(response.data,9)
         if(response.data.hasOwnProperty('errors')){
             console.log(11)
             swal(response.data.message)
         }
         else
         {
           swal('Successfully Registered!!!')
           dispatch(setUser())
       props.history.push('/users/login')
         }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    }
export const startLoginUser=(formData,props)=>{
    return(dispatch)=>{
        axios.post('http://localhost:3025/users/login',formData)
 
        .then((response)=>{
            
         if(response.data.error){
             
            swal(response.data.error)
         }
         else
         {   swal('Successfully Loggedin!!!')
             const token=response.data.token
             localStorage.setItem('authToken',token)

             Promise.all([axios.get('http://localhost:3025/users/account',{
                 headers:{
                     'x-auth':token
                 }
             }),axios.get('http://localhost:3025/customers',{
                   headers:{
                       'x-auth':token
                   }
             }),axios.get('http://localhost:3025/departments',{
                headers:{
                    'x-auth':token
                }
          }),axios.get('http://localhost:3025/employees',{
            headers:{
                'x-auth':token
            }
      }),axios.get('http://localhost:3025/tickets',{
        headers:{
            'x-auth':token
        }
  })])
        .then(values=>{
            const [userResponse,customersResponse,departmentsResponse,employeesResponse,ticketsResponse]= values
            dispatch(setUser(userResponse.data))
            dispatch(setCustomers(customersResponse.data))
            dispatch(setDepartments(departmentsResponse.data))
            dispatch(setEmployees(employeesResponse.data))
            dispatch(setTickets(ticketsResponse.data))
            props.history.push('/')
        })
            
         }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    }
export const startGetUser=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3025/users/account',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const user=response.data
            dispatch(setUser(user))
        })
    }
}


export const startLogoutUser = () =>
{
    return (dispatch) =>
    {
        axios.delete('http://localhost:3025/users/logout', {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            console.log(response.data,66666)
            if(response.data.hasOwnProperty('notice'))
            {
                swal('Logged Out Successfully!!')
                dispatch(setUser({}))
                localStorage.removeItem('authToken')
                window.location.href = "/users/login"
            }
            else
            {
                swal(response.data)
            }
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}