
let router = require('express').Router();
const { createUser, login, verifyToken, getUserProfile } = require("./userController");


router.post('/createuser', createUser);
router.post('/login', login);
router.get('/userprofile', verifyToken, getUserProfile);

module.exports = router;