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



router.route('').get(articleController.articles);
router.route('/article').get(articleController.getArticle)
router.route('/article').post(articleController.addArticle)
router.route('/article').delete(articleController.deleteArticle)
router.route('/article/:id').get(articleController.getArticleById)

router.route('/user').get(userController.getUsers)
router.route('/user').post(userController.addUser)
router.route('/user').delete(userController.deleteUser)
router.route('/user/:id').get(userController.getUserById)



module.exports = router;