import React, { Component, useEffect, useState } from 'react';
import axios from "axios";
const base_url = 'http://localhost:6969';

const MySQLData = () => {

  const [userData, setUserData] = useState([]);

  const update = async() => {

    return (
      <></>
    );

  }
  useEffect(() => {
    axios.get(base_url + "/api/get").then((response) => {
      setUserData(response.data);
      console.log(userData);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  const deleteData = (_id) => {
    axios.delete(base_url + "/api/delete/" + _id).then((response) => {
      setUserData(
        userData.filter((val) => {
          return val._id != _id;
        })
      );
    });
  }

  // const updateData = (_id) => {
  //   axios.put(base_url + "/api/update", {
  //     _id: _id,
  //     username: username,
  //     email: email,
  //     password: password,
  //   }).then((response) => {
  //     setUserData(
  //       userData.map((val) => {
  //         return val._id == _id
  //           ? {
  //             _id: val._id,
  //             name: name,
  //             email: email,
  //             password: password,
  //           }
  //           : val;
  //       })
  //     );
  //   });
  // }

  const tableData = () => {
    return userData.map((val) => {
      return (
        <tr key={val._id}>
          <td>{val._id}</td>
          <td>{val.username}</td>
          <td>{val.email}</td>
          <td>{val.password}</td>
          <td>
            <button type='button'
              onClick={() => {
                // alert("Delete Clicked");
                deleteData(val._id);
              }}
            >
              Delete
            </button>
          </td>
          <td>
            <button type='button'
              onClick={() => {
                alert("Update Clicked");
                // updateData(val._id);
              }}
            >
              Update
            </button>
          </td>
        </tr>
      );
    });
  }

  return(
    <section>
      <div>
        <h2>MySQL Data</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {tableData()}
          </tbody>
        </table>
      </div>
    </section>
  );

}

export default MySQLData;
