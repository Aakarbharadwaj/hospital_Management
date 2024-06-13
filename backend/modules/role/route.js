const express = require('express');
const { validateRole } = require('./validator');
const { createRole,getRoles,deleteRole } = require('./controller');
const router = express.Router();


router.post('/add',validateRole,createRole)
router.get('/',getRoles)
router.delete('/delete',deleteRole)


module.exports = router;