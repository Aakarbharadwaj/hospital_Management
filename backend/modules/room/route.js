const express = require('express')
const router = express.Router();

// const {validateRoom} = require('./validator')
const {createRoom, getAllRoom ,deleteRoom,updateRoom} = require('./controller')


router.post('/add',createRoom);
router.get('/',getAllRoom);
// router.delete('/delete',deleteRoom);
// router.put('/update',updateRoom);


module.exports = router;