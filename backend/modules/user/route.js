const express = require('express')
const router = express.Router();

const {validateSignup,validateLogin} = require('./validator')
const {createUser,login} = require('./controller')


router.post('/signup',validateSignup,createUser);
router.post('/login',validateLogin,login);
// router.post('/logout',logout);


module.exports = router;