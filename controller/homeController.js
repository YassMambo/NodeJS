const mongoose = require('mongoose')
const {UserModel} = require('../models/user')
const {ArticleModel} = require('../models/home')

module.exports = {
  
    addArticle: (req, res) => {
        const article = new ArticleModel({
            title: req.body.title,
            description: req.body.description,
            user: req.body.users
        })

        article.save({}, (err, article, user) => {
            if (err) {
                res.status(500).render('error',{
                    message: 'erreur dans la sauvegarde de cet article',
                    error: err.message
                })
            } else {
                res.status(200).redirect('/')
            }
        })
    },

    getArticles: (req, res) => {UserModel.find({}, (err, users) =>{
        if (err) {
            res.status(500).send(err)
          } 
        else {
            ArticleModel.find({}, (err, articles) => {
                if (err) {
                    res.status(500).render('error',{
                        message: "Nous n'avons pas pu trouver les articles",
                        error: err.message
                    })
                } 
                else {
                    if (!articles) {
                        res.status(404).send('Aucun article trouvé trouvé')
                      }
                    

                    res.status(200).render('index',{
                        message: 'Article retrieved',
                        articles,
                        users
                        
                    })
                }
            })
          }
    })
        
    },

    getArticleById: (req, res) => {UserModel.find({}, (err, user) => {
        if (err) {
            res.status(500).send(err)
          } 
        else {
            ArticleModel.findById({_id: req.params.id}, (err, article) => {
                if (err) {
                    res.status(500).render('error',{
                        message: 'Article inexistant',
                        error: err.message
                    })
                }
                else {
                    res.status(200).render('article',{
                        message: "Voici l'article correspondant",
                        article,
                        user
                    })
                }
            })
        }
    })   
    },
    
    updateArticle: (req, res) => {
        ArticleModel.updateOne({ _id: req.body.id},{title: req.body.title, description: req.body.description}, (err, article) => {
            res.json({
                article
            })
        })
    },  

    deleteArticle: (req, res) => {
        ArticleModel.deleteOne({ id: req.body.id}, (err, article) => {
            res.json({
                article
            })
        })
    }    
}

