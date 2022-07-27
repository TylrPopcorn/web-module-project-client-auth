import React, { useEffect } from 'react';
import axios from "axios"
import { useHistory } from 'react-router-dom'

const Logout = () => {
    const { push } = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token")

        axios.post('http://localhost:3000/api/logout', {}, {
            headers: {
                authorization: token,
            }
        })
            .then(res => {
                localStorage.removeItem("token")
                console.log(res)
                push('/login')
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>

        </div>
    )
}

export default Logout;