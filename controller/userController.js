const mongoose = require('mongoose')
const {UserModel} = require('../models/user')

module.exports = {
  
    users: (req, res) => {
       
        res.status(200).render('users', {
            users
        })
    },
    addUser: (req, res) => {
        
        const user = new UserModel({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age
            
        })
   
        user.save({}, (err, user) => {
            if (err) {
                res.status(500).render('error',{
                    message: 'Error when saving the thing',
                    error: err.message
                })
            } else {
                res.status(200).redirect('/user', {
                    message: 'Saved',
                    user
                })
            }
        })

   
        
    },

    getUsers: (req, res) => {
        UserModel.find({}, (err, users) => {
            if (err) {
                res.status(500).render('error',{
                    message: 'Error when getting things',
                    error: err.message
                })
            } else {
                res.status(200).render('users',{
                    message: 'Things retrieved',
                    users
                })
            }
        })
    },
    getUserById: (req, res) => {
        UserModel.find({}, (err, user) => {
            if (err) {
                res.status(500).render('error',{
                    message: 'Error when getting thing',
                    error: err.message
                })
            }
            else {
                res.status(200).render('user',{
                    message: 'Thing retrieved',
                    user
                })
            }
        })
    },
    deleteUser: (req, res) => {
        UserModel.deleteOne({ id: req.body.id}, (err, user) => {
            res.json({
                user
            })
        })
    }  
}

