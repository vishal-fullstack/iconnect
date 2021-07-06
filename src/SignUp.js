import React, { useState } from 'react';
import * as userService from "./service/user-service";

export default function SignUp(props) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        gender: "",
        contact: "",
        address: "",
        password: ""
    })
    const [userError, setUserError] = useState({
        nameError: "",
        emailError: "",
        genderError: "",
        contactError: "",
        addressError: "",
        passwordError: ""
    })

    const onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let updateUser = { ...user };
        updateUser[name] = value;
        setUser(updateUser);
    }
    const validateForm = () => {

    }
    const saveUser = async () => {
        let result = await userService.signUp(user);

        if (result) {
            console.log("result==>", result);
            props.history.push("/");
        }
    }

    return (
        <div className="container">
            <div className="sign-up-box">
                <h3>SignUp</h3>
                <div className="mb-3 row">
                    <label for="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" name="name" className="form-control-plaintext" id="name" value={user.name} onChange={onChange} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" name="email" className="form-control-plaintext" id="email" value={user.email} onChange={onChange} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" name="password" className="form-control" id="password" value={user.password} onChange={onChange} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="gender" className="col-sm-2 col-form-label">Gender</label>
                    <div className="col-sm-10">
                        <input type="text" name="gender" className="form-control-plaintext" id="gender" value={user.gender} onChange={onChange} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Contact</label>
                    <div className="col-sm-10">
                        <input type="text" name="contact" className="form-control-plaintext" id="staticEmail" value="" value={user.contact} onChange={onChange} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="address" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                        <textarea type="text" name="address" className="form-control-plaintext" id="address" value="" value={user.address} onChange={onChange} />
                    </div>
                </div>
                <div className="mb-3">
                    <button type="submit" class="btn btn-primary mb-3" onClick={saveUser}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}
