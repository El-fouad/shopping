

const prod_counter={count:1}

const Reducer = (state=prod_counter,action)=>{
    switch(action.type){
        case "Increment":
            return {...state,count: state.count+1}
        case "Decrement":
            return {...state,count:state.count-1}
        default:
            return state
    }
}
export default Reducer