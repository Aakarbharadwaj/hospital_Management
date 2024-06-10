const express = require('express')
const router = express.Router();

const {validateRoom} = require('./validator')
const {createRoom, getRoom ,deleteRoom,updateRoom} = require('./controller')


router.post('/add',validateRoom,createRoom);
router.get('/',getRoom);
router.get('/delete',deleteRoom);
router.get('/update',updateRoom);


module.exports = router;