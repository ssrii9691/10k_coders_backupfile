import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getfounderFromServerAction } from '../store/actions/founderAction';
import FounderTable from './FounderTable';

const Founder = () => {
    const dispatch=useDispatch();
    const founderDetails=useSelector((state)=>state.founder);
    useEffect(()=>{
        dispatch(getfounderFromServerAction())
    },[])
  return (
    <div className="container">
        <div className="row">
            <div className="col-4">

            </div>
            <div className="col-8">
                <FounderTable founders={founderDetails}/>
            </div>
        </div>
    </div>
  )
}

export default Founder
