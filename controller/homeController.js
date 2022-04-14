const mongoose = require('mongoose')
const {UserModel} = require('../models/user')
const {ArticleModel} = require('../models/home')

module.exports = {
  
    articles: (req, res) => {UserModel.find({}, (err, users) => {
        if (err) {
          res.status(500).send(err)
        } else {
            console.log(users)
         /* ArticleModel.find({}, (err, articles) => {
            if (err) {
              res.status(500).send(err)
            } else {
              if (!articles) {
                res.status(404).send('Aucun article trouvé trouvé')
              }
              res.status(200).render('index', {
                articles,
                users
              })
            }
          })*/
        }
      })
    }, 

   /* articles: (req, res) => {
       
        res.status(200).render('', {
            articles,
            users
        })
    },*/

    addArticle: (req, res) => {
        UserModel.findById({_id: req.body.id}, (err, user)=>{
            console.log(user)
            if (err) {
                res.status(500).json({
                    message: 'Impossible de recuperer le user',
                    error: err.message
                })
            } 
            else {
               
                if (!user) {
                    res.status(404).render('error',{
                        error: 'Aucun user trouvé'
                    })
                }

                const article = new ArticleModel({
                    title: req.body.title,
                    description: req.body.description,
                    user: user._id
                })

                article.save({}, (err, article, user) => {
                    if (err) {
                        res.status(500).render('error',{
                            message: 'erreur dans la sauvegarde de cet article',
                            error: err.message
                        })
                    } else {
                        res.status(200).redirect('/articles',{
                            message: 'Saved',
                            article,
                            user
                        })
                    }
                })
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
            res.render('index',{
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

