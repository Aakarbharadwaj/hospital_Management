const express = require('express');
const { validateRole } = require('../user/validator');
const { createRole,getRole } = require('./controller');
const router = express.Router();


router.post('/addrole',validateRole,createRole)
router.get('/getrole',getRole)



module.exports = router;