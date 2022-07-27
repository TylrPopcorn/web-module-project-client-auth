import axios from "axios"
import React, { useState, useEffect } from "react";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token")

        axios.get('https://localhost:3000/api/friends', {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                console.log(res)
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h2>FriendsList</h2>

            <ul>
                {friends.map(friend => {
                    return (
                        <li> {friend.name} - {friend.age} - {friend.email} </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FriendsList