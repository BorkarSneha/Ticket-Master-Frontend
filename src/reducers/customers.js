const customersInitialState=[]

const customersReducer=(state=customersInitialState,action)=>{
    console.log(action,6)
    switch(action.type){
        
        case 'SET_CUSTOMERS':{
            console.log(state,1)
            return [...action.payload]
        }
        case 'ADD_CUSTOMER':{
            return [...state,action.payload]
        }
        case 'EDIT_CUSTOMER':{
            return state.map(customer=>{
                if(customer._id==action.payload._id){
                    return{...action.payload}
                }else{
                    return {...customer}
                }
            })
        }
        case 'REMOVE_CUSTOMER':{
            return state.filter(customer=> customer._id !=action.payload)
        }
        default:{
            
            return [...state]
        }
    }

}
export default customersReducer