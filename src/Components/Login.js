import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import axios from "axios"

const initialState = {
    username: "",
    password: '',
}
const Login = () => {
    const { push } = useHistory()

    const [cred, setCred] = useState(initialState);

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("https://localhost:3000/api/login", cred)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.payload);
                push("/friends") //Move to friends page.
            })
            .catch(err => {
                console.log(err)

            })
    }

    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        onChange={handleChange} id="username"
                        name="username"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={handleChange}
                        id="password"
                        name="password"
                    />
                </div>

                <button>Submit</button>

            </form>
        </div>
    )
}

export default Login;