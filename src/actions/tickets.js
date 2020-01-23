import axios from 'axios'
import swal from 'sweetalert'
export const setTickets=(tickets)=>{
    return{
        type:'SET_TICKETS',
        payload:tickets
    }

}
export const startSetTickets=()=>{
    return(dispatch)=>{
        axios.get('http://localhost:3025/tickets',{
            headers: {'x-auth':localStorage.getItem('authToken')}
        })
        .then((response)=>{

            const tickets=response.data
            console.log(tickets,1000000)
            dispatch(setTickets(tickets))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const addTicket=(ticket)=>{
    return{
        type:'ADD_TICKET',
        payload:ticket
    }
}
export const startAddTicket=(formData,props)=>{
    console.log('sartred')
    return(dispatch)=>{
        axios.post('http://localhost:3025/tickets',formData ,{
            headers: {'x-auth':localStorage.getItem('authToken')}
        })
        .then((response)=>{
            console.log(response.data, 676711111111111111111)
            if(response.data.hasOwnProperty('errors')){
                swal(response.data.message)
            }
            else
            {
              const ticket=response.data
              dispatch(addTicket(ticket))
              props.history.push(`/tickets/${ticket._id}`)
            }
           })
           .catch((err)=>{
               console.log(err)
           })
    }
}
export const editTicket=(ticket)=>{
     return{
         type:'EDIT_TICKET',
         payload:ticket
     }
}
export const startEditTicket=(formData,id,props)=>{
     return (dispatch)=>{
        axios.put(`http://localhost:3025/tickets/${id}`,formData ,{
        headers: {'x-auth':localStorage.getItem('authToken')}
    })
    .then((response)=>{
        if(response.data.hasOwnProperty('errors')){
            swal(response.data.message)
        }
        else
        {
          const ticket=response.data
          dispatch(editTicket(ticket))
          props.history.push(`/tickets`)
        }
       })
       .catch((err)=>{
           console.log(err)
       })
     }
}
export const removeTicket=(id)=>{
    return{
        type:'REMOVE_TICKET',
        payload:id
    }
}

export const startRemoveTicket=(id)=>{
       return(dispatch)=>{
        axios.delete(`http://localhost:3025/tickets/${id}`,{
            headers: {'x-auth':localStorage.getItem('authToken')}
        })
        .then((response)=>{

            dispatch(removeTicket(response.data._id))
        })
        
       }
}
