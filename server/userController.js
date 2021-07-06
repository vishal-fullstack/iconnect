let userModel = require("./user");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    let { email, password } = req.body;
    try {
        let userExist = await userModel.findOne({ email, password });
        if (userExist !== null) {
            let obj = {};
            obj.name = userExist.name;
            obj.email = userExist.email;
            jwt.sign(obj, 'secretkey', (err, token) => {
                if (token) {
                    res.json({
                        status: "success",
                        message: "Login successfully",
                        data: userExist,
                        token
                    })
                } else {
                    console.log(err)
                }
            })

        } else {
            res.json({
                status: "Failure",
                message: "wrong credentials",
                data: userExist
            })
        }
    } catch (err) {
        console.log("login error===>", err)
    }
}

const createUser = (req, res) => {
    let { name, email, contact, address, password, gender } = req.body;

    try {
        let user = new userModel();
        user.name = name;
        user.email = email;
        user.contact = contact;
        user.address = address;
        user.gender = gender;
        user.password = password;
        user.save((err, data) => {
            if (err) {
                res.json({
                    status: 'failure',
                    message: 'something went wrong',
                });
            } else {
                res.json({
                    status: 'success',
                    message: 'saved successfully',
                });
            }
        });
    } catch (err) {
        console.log("create user error=====>", err);
    }
}

const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (token) {
        req.token = token;
        jwt.verify(token, 'secretkey', (err, data) => {
            if (data) {
                next();
            } else {
                res.json({
                    status: "failure",
                    message: "session expires"
                })
            }
        })
    } else {
        res.json({
            status: "failure",
            message: "session expires"
        })
    }
}

const getUserProfile = (req, res) => {
    res.json({
        status: "success",
        message: "Welcome"
    });
}

module.exports = {
    createUser,
    login,
    verifyToken,
    getUserProfile
};