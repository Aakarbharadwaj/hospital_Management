const express = require('express')
const router = express.Router();

const {validateRoom} = require('./validator')
const {createRoom, getRoom} = require('./controller')


router.post('/addroom',validateRoom,createRoom);
router.get('/getroom',getRoom);


module.exports = router;