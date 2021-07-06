import React, { useState, useEffect } from 'react';
import * as userService from "./service/user-service";

export default function Home() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    useEffect(() => {
        let name = localStorage.getItem("name")
        setName(name);
        getUser();
    }, []);

    const getUser = async () => {
        let user = await userService.getUserProfile();
        if (user) {
            setMessage(user.message);
            if (user.status !== "success") {
                setError(true);
            } else {
                setError(false);
            }
        }
    }
    return (
        <div>
            <h2>{!error ? `${message} ${name}` : message}</h2>
        </div>
    )
}
