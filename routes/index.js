var express = require('express');

var router = express.Router();

const userController = require('../controller/userController')

/* GET home page. */




// exports.router = (function (){

// const router = express.Router()

// router.route('usu').get(userController.users)

// return router

// })()



router.route('').get(userController.users);
router.route('/user/:id').get(userController.user)



module.exports = router;