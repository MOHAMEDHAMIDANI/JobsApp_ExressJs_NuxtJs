const express= require('express')
router = express.Router();
const {Register , LoginUser} = require('../controllers/auth')

router.route('/Register').post(Register)
router.route('/Login').post(LoginUser)
module.exports = router;
