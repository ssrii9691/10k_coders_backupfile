import axios from 'axios'
import { GET_FOUNDER } from './actionTypes'
export const getfounderFromServerAction=()=>{
    return (dispatch)=>{
       getLatestFounder(dispatch)
    }
}

export const deleteFounderAction=(id)=>{
    return (dispatch)=>{
        axios.delete("http://localhost:3201/founder/"+id).then(()=>{
            getLatestFounder(dispatch)
        })
    }
}

function getLatestFounder(dispatch){   axios.get("http://localhost:3201/founder").then((response)=>{
        dispatch({
            type:GET_FOUNDER,
            payload:response.data
        })
    })
}

