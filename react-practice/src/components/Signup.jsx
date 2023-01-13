import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const [backgroundColor, setBackgroundColor] = useState(""); 

    const successMessage = () => {
        if (submitted) {
            return (
                <div className="success">
                    <p>
                        Username: <span>{username}</span>
                    </p>
                    <p>
                        Email: <span>{email}</span>
                    </p>
                    <p>
                        password: <span>{password}</span>
                    </p>
                    <p>
                        Thank you for signing up!
                    </p>
                </div>
            )
        }

    }
    const errorMessage = () => {
        if (error) {
            return (
                <div className="error">
                    <p>Username, email and password are required</p>
                </div>
            )
        }
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
        setSubmitted = (false);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted = (false);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted = (false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, email, password);
        const studData = {
            username: username,
            email: email,
            password: password,
        }
        console.log(studData);
        axios.post(`http://localhost:6969/api/insert`, studData).then(
            (res) => {
                alert("data added succesfully")
            }
        )
        setBackgroundColor("green");
        if (username === "" || email === "" || password === "")
            setError(true);
        else {
            setSubmitted(true);
            setError(false)
        }

    }

    return (
        <section className="signup" style={{ backgroundColor: backgroundColor }} >
            <h2 className="center">Signup</h2>

            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <form className="signup-form">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Username" onChange={handleUsername} />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" onChange={handleEmail} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" onChange={handlePassword} />
                <br />
                <button type="submit" onClick={handleSubmit}>Signup</button>
                <br />
            </form>
        </section>
    )
}