const express = require('express');
const { registerUser , getUser , loginUser , deleteUser} = require('../controllers/userController');

const router = express.Router()

router.route("/").post(registerUser).get(getUser)
router.route("/login").post(loginUser)
router.route("/delete/:id").delete(deleteUser)

module.exports = router

