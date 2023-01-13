import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
const base_url = 'http://localhost:6969/';


const generateTable = () => {

    let [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get(base_url + "/api/get").then((response) => {
            setUserData(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    const tableData = () => {
        return userData.map((val, key) => {
            return (
                <tr key={key}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>
                        <button>
                            onClick={() => {
                                deleteData(val.id);
                            }}
                        </button>
                        <button>
                            onClick={() => {
                                updateData(val.id);
                            }}
                        </button>
                    </td>
                </tr>
            )
        }  
    )} 

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
            name: name,
            email: email,
        }).then((response) => {
            setUserData(
                userData.map((val) => {
                    return val.id == id
                        ? {
                            id: val.id,
                            name: name,
                            email: email, 
                        }
                        : val;
                })
            );
        }
    )};
}

