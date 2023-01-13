import React, { Component, useEffect, useState } from 'react';
import axios from "axios";
const base_url = 'http://localhost:6969/';

const MySQLData = () => {

  const [userData, setUserData] = useState([]);

  const data = () => {

    return (
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
    );

  }
  useEffect(() => {
    axios.get(base_url + "/api/get").then((response) => {
      setUserData(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  const deleteData = (id) => {
    axios.delete(base_url + "/api/delete/" + id).then((response) => {
      setUserData(
        userData.filter((val) => {
          return val.id != id;
        })
      );
    });
  }

  const updateData = (id) => {
    axios.put(base_url + "/api/update", {
      id: id,
      username: username,
      email: email,
      password: password,
    }).then((response) => {
      setUserData(
        userData.map((val) => {
          return val.id == id
            ? {
              id: val.id,
              name: name,
              email: email,
              password: password,
            }
            : val;
        })
      );
    });
  }

  const tableData = () => {
    return userData.map((val, key) => {
      return (
        <tr key={key}>
          <td>{val.id}</td>
          <td>{val.username}</td>
          <td>{val.email}</td>
          <td>{val.password}</td>
          <td>
            <button
              onClick={() => {
                deleteData(val.id);
              }}
            >
              Delete
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                updateData(val.id);
              }}
            >
              Update
            </button>
          </td>
        </tr>
      );
    });
  }

}

export default MySQLData;
