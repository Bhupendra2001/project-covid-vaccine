const express = require('express')
const router = express.Router()
const {Register , login} = require('../controller/userController')
const vC=require("../controller/vaccineController")
const {Authentication}=require("../auth.js")
router.post('/register', Register  )
router.post('/login',  login )
router.post("/vaccineAvailable",vC.vaccineAvailable)
router.post("/createVaccineSlot",Authentication,vC.createVaccineSlot)

module.exports = router