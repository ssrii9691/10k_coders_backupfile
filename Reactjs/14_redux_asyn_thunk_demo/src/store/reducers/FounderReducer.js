import { GET_FOUNDER } from "../actions/actionTypes";
import { defaultState } from "../defaultstate";

export const founderReducer=(state=defaultState,action)=>{
    switch (action.type) {
        case GET_FOUNDER:
            return{...state,founder:action.payload}
    
        default:
            return  state
    }
}