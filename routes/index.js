var express = require('express');

var router = express.Router();

const userController = require('../controller/userController')
const articleController = require('../controller/homeController')


/* GET home page. */




// exports.router = (function (){

// const router = express.Router()

// router.route('usu').get(userController.users)

// return router

// })()



router.route('').get(articleController.getArticles)
router.route('').post(articleController.addArticle)
router.route('').put(articleController.updateArticle)
router.route('').delete(articleController.deleteArticle)
router.route('/article/:id').get(articleController.getArticleById)

router.route('/users').get(userController.getUsers)
router.route('/users').post(userController.addUser)
router.route('/users').put(userController.updateUser)
router.route('/users').delete(userController.deleteUser)
router.route('/user/:id').get(userController.getUserById)



module.exports = router;