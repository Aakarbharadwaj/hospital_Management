const express = require('express');
const { createAppointment, getAppointmentById, getAllAppointments, updateAppointment, deleteAppointment } = require('./controller');
const router = express.Router();


router.post('/add',createAppointment)
router.get('/getby:id',getAppointmentById)
router.get('/',getAllAppointments)
router.put('/update',updateAppointment)
router.delete('/delete/:id',deleteAppointment)