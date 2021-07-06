import axios from "axios";
let token = localStorage.getItem("token");

export const login = async (user) => {
    const response = await axios.post(`http://localhost:3002/api/login`, user);
    if (response) {
        return response.data;
    }
}

export const signUp = async (user) => {
    const response = await axios.post(`http://localhost:3002/api/createuser`, user);
    if (response) {
        return response.data;
    }
}

export const getUserProfile = async (user) => {
    const response = await axios.get(`http://localhost:3002/api/userprofile`, {
        headers: {
            'Authorization': token
        }
    });
    if (response) {
        return response.data;
    }
}


