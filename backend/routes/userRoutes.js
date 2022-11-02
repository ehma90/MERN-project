const express = require('express')
const router = express.Router()
const {registerUsers, loginUsers, getMe} = require('../controller/userController')

const {protect} = require('../middleWare/authMiddleWare')

router.post('/', registerUsers)
router.post('/login', loginUsers)
router.get('/me',protect, getMe)

module.exports = router