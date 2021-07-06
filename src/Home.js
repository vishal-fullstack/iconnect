import React, { useState, useEffect } from 'react';
import * as userService from "./service/user-service";

export default function Home() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    useEffect(() => {
        let name = localStorage.getItem("name")
        setName(name);
        getUser();
        return () => localStorage.removeItem("token")
    }, []);

    const getUser = async () => {
        let user = await userService.getUserProfile();
        if (user) {
            setMessage(user.message)
        }
    }
    return (
        <div>
            <h2>{message ? `${message} ${name}` : message}</h2>
        </div>
    )
}
