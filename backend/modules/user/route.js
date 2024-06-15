const express = require('express')
const router = express.Router();

const {validateSignup,validateLogin} = require('./validator')
const {createUser,login, getAllusers} = require('./controller')


router.post('/signup',validateSignup,createUser);
router.post('/login',validateLogin,login);
router.get('/',getAllusers)
// router.post('/logout',logout);


module.exports = router;