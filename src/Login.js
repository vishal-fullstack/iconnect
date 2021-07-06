import React, { useState } from 'react';
import * as userService from "./service/user-service"

export default function Login(props) {
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    })
    const [message, setMessage] = useState("");

    const onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let updateUser = { ...loginDetails };
        updateUser[name] = value;
        setLoginDetails(updateUser);
    }
    const onSubmit = async () => {
        const result = await userService.login(loginDetails);
        if (result) {
            if (result.status === "success") {
                localStorage.setItem("name", result.data.name);
                localStorage.setItem("token", result.token);
                props.history.push("/home")
            } else {
                setMessage(result.message);
                setTimeout(() => {
                    setMessage("");
                }, 3000)
            }
        }
    }

    return (
        <div class="container">
            <div className="center-box">
                <h3 style={{ padding: "10px" }}>Login</h3>
                <div className="mb-3 row text-left">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" name="email" className="form-control-plaintext" id="email" value={loginDetails.email} onChange={onChange} />
                    </div>

                </div>
                <div className="mb-3 row text-left">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" name="password" className="form-control" id="password" value={loginDetails.password} onChange={onChange} />
                    </div>
                </div>
                <div className="mb-3">
                    <button type="submit" class="btn btn-primary mb-3" onClick={onSubmit}>Login</button>
                    <a href="/signup" target="_blank" style={{ float: "right" }}>Sign Up</a>
                </div>
                <div className="text-danger">{message}</div>
            </div>

        </div>
    )
}
