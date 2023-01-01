const express = require('express')
const router = express.Router()
const {Register , login} = require('../controller/userController')
const vC=require("../controller/vaccineController")

router.post('/register', Register  )
router.post('/login',  login )
router.get("/vaccineAvailable",vC.vaccineAvailable)
router.post("/createVaccineSlot",vC.createVaccineSlot)

module.exports = router