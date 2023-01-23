import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addcreatorAsyncAction, addcreatorsAction, deletecreatorAsyncAction, deletecreatorsAction, getallcreatorsAsyncAction, updatecreatorAsyncAction, updatecreatorsAction } from "../store/slices/CreatorSlice";

const CreatorsFuncCompo = () => {
  const [creator, setcreator] = useState({
    id: "",
    fname: "",
    lname: "",
    email: "",
  });
  const [isEdit, setisEdit] = useState(false);
  const creators = useSelector((state) => state.creators);
  const { id, fname, lname, email } = creator;
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getallcreatorsAsyncAction())
  },[])


  const handlechange=(e)=>{
     let newCreator={...creator}
     newCreator[e.target.name]=e.target.value;
     setcreator(newCreator)
  }

  const CreatorAdd=()=>{
    // dispatch(addcreatorsAction(creator))
    dispatch(addcreatorAsyncAction(creator))
    clearform()
  }

  const deleteCreator=(cre)=>{
    // dispatch(deletecreatorsAction(cre))
    dispatch(deletecreatorAsyncAction(cre))
  }
  const EditCreator=(cre)=>{
    setisEdit(true)
    setcreator(cre)
  }
  const CreatorUpdate=()=>{
    dispatch(updatecreatorAsyncAction(creator))
    // dispatch(updatecreatorsAction(creator))
    clearform()
    setisEdit(false)
  }
  const clearform=()=>{
    setcreator({ id: "",
    fname: "",
    lname: "",
    email: "",})
  }
  return (
    <div>
      <form>
        <label htmlFor="">id:</label>
        <input
          type="text"
          name="id"
          value={id}
          onChange={(e) => {
            handlechange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">firstname:</label>
        <input
          type="text"
          name="fname"
          value={fname}
          onChange={(e) => {
            handlechange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">lastname:</label>
        <input
          type="text"
          name="lname"
          value={lname}
          onChange={(e) => {
            handlechange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">email:</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            handlechange(e);
          }}
        />{" "}
        <br />
        {isEdit?(<button type="button" className="btn btn-warning" onClick={CreatorUpdate}>updateCreator</button>):(<button type="button" className="btn btn-primary" onClick={CreatorAdd}>
          add creator
        </button>)}
      </form>

      <table className="table">
        <thead>
            <tr>
                <th>id</th>
                <th>firstname</th>
                <th>lastname</th>
                <th>email</th>
                <th>edit</th>
                <th>delete</th>
            </tr>
        </thead>
        <tbody>
            
            {creators.creators.map((cre,i)=>(
                <tr key={i}>
                    <td>{cre.id}</td>
                    <td>{cre.fname}</td>
                    <td>{cre.lname}</td>
                    <td>{cre.email}</td>
                    <td>
                        <button className="btn btn-info" onClick={()=>{EditCreator(cre)}}>edit</button>
                    </td>
                    <td>
                        <button className="btn btn-danger" onClick={()=>{deleteCreator(cre)}}>delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreatorsFuncCompo;
