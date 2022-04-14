const mongoose = require('mongoose')
const {UserModel} = require('../models/user')
const {ArticleModel} = require('../models/home')

module.exports = {
  
    article: (req, res) => {
        var id = req.params.id;
        var article = articles.find(a => a.id == id);
        if (article == null || article == undefined) {
            return res.status(404).render('error', {});
        }
       return res.status(200).render('article', {
            article
        })
    }, 
    articles: (req, res) => {
       
        res.status(200).render('articles', {
            articles
        })
    },

    addArticle: (req, res) => {
        /*const user = new UserModel({
            _id: new mongoose.Types.ObjectId(),
            firstname: 'Mambo',
            lastname: 'Cubano',
            age: req.body
        })*/
        UserModel.find({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
        },(err, user)=>{
            if (err) {
                res.status(500).json({
                    message: 'Impossible de recuperer le user',
                    error: err.message
                })
            } 
            else {
                if (!user) {
                    res.status(404).render('error',{
                        error: err.message
                    })
                }                
            }
            console.log(user);
            const article = new ArticleModel({
                title: req.body.title,
                description: req.body.description,
                user: user._id
            })

            article.save({}, (err, thing) => {
                if (err) {
                    res.status(500).json({
                        message: 'Error when saving the thing',
                        error: err.message
                    })
                } else {
                    res.status(200).json({
                        message: 'Saved',
                        thing
                    })
                }
            })

        })     
    },
    getArticle: (req, res) => {
        ArticleModel.find({}, (err, things) => {
            if (err) {
                res.status(500).json({
                    message: 'Error when getting things',
                    error: err.message
                })
            } else {
                res.status(200).json({
                    message: 'Article retrieved',
                    things
                })
            }
        })
    },
    getArticleById: (req, res) => {
        ArticleModel.find({}, (err, thing) => {
            if (err) {
                res.status(500).json({
                    message: 'Error when getting thing',
                    error: err.message
                })
            }
            else {
                res.status(200).json({
                    message: 'Article retrieved',
                    thing
                })
            }
        })
    },
    deleteArticle: (req, res) => {
        ArticleModel.deleteOne({ id: req.body.id}, (err, things) => {
            res.json({
                things
            })
        })
    }    
}

