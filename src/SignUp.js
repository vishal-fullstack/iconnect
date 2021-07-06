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
        let obj = { ...userError };
        let validationFlag = false;
        Object.entries(user).map((item) => {
            let name = `${item[0]}Error`;
            if (item[1] === "") {
                obj[name] = `${item[0]} is mandatory`;
                validationFlag = true;
            } else {
                obj[name] = "";
            }
        })
        setUserError(obj);
        return validationFlag;
    }

    const saveUser = async () => {
        const isError = validateForm();
        if (!isError) {
            let result = await userService.signUp(user);
            if (result) {
                if (result.status === "success") {
                    props.history.push("/");
                } else {

                }
            }
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
                    <div className="text-danger text-center">{userError.nameError}</div>
                </div>
                <div className="mb-3 row">
                    <label for="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" name="email" className="form-control-plaintext" id="email" value={user.email} onChange={onChange} />
                    </div>
                    <div className="text-danger text-center">{userError.emailError}</div>
                </div>
                <div className="mb-3 row">
                    <label for="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" name="password" className="form-control" id="password" value={user.password} onChange={onChange} />
                    </div>
                    <div className="text-danger text-center">{userError.passwordError}</div>
                </div>
                <div className="mb-3 row">
                    <label for="gender" className="col-sm-2 col-form-label">Gender</label>
                    <div className="col-sm-10">
                        <input type="text" name="gender" className="form-control-plaintext" id="gender" value={user.gender} onChange={onChange} />
                    </div>
                    <div className="text-danger text-center">{userError.genderError}</div>
                </div>
                <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Contact</label>
                    <div className="col-sm-10">
                        <input type="text" name="contact" className="form-control-plaintext" id="staticEmail" value="" value={user.contact} onChange={onChange} />
                    </div>
                    <div className="text-danger text-center">{userError.contactError}</div>
                </div>
                <div className="mb-3 row">
                    <label for="address" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                        <textarea type="text" name="address" className="form-control-plaintext" id="address" value="" value={user.address} onChange={onChange} />
                    </div>
                    <div className="text-danger text-center">{userError.addressError}</div>
                </div>
                <div className="mb-3">
                    <button type="submit" class="btn btn-primary mb-3" onClick={saveUser}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}
