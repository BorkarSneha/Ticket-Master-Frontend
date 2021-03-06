const ticketsInitialState=[]

const ticketsReducer=(state=ticketsInitialState,action)=>{
    console.log(action,6)
    switch(action.type){
        
        case 'SET_TICKETS':{
            console.log(state,1)
            return [...action.payload]
        }
        case 'ADD_TICKET':{
            return [...state,action.payload]
        }
        case 'EDIT_TICKET':{
            return state.map(ticket=>{
                if(ticket._id==action.payload._id){
                    return{...action.payload}
                }else{
                    return {...ticket}
                }
            })
        }
        case 'REMOVE_TICKET':{
            return state.filter(ticket=> ticket._id !=action.payload)
        }
        default:{
            
            return [...state]
        }
    }

}
export default ticketsReducer