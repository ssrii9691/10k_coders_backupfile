import React from "react";
import { useDispatch } from "react-redux";
import { deleteFounderAction } from "../store/actions/founderAction";

const FounderTable = ({ founders }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>username</th>
            <th>country</th>
            <th>phone</th>
            <th>password</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {founders.map((fou, i) => 
            <tr key={i}>
              <td>{fou.id}</td>
              <td>{fou.email}</td>
              <td>{fou.username}</td>
              <td>{fou.country}</td>
              <td>{fou.phone}</td>
              <td>{fou.password}</td>

              <td>
                <button className="btn btn-danger">editfounder</button>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    dispatch(deleteFounderAction(fou.id));
                  }}
                >
                  deletefounder
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FounderTable;
