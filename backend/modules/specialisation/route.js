const express = require('express');
const { createSpecialisation,getAllSpecialisation,deleteSpecialisation } = require('./controller');
const router = express.Router();


router.post('/add',createSpecialisation)
router.get('/',getAllSpecialisation)
router.delete('/delete',deleteSpecialisation)


module.exports = router;