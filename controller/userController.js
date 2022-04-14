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
                res.status(200).redirect('/users')
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
        UserModel.findById({_id: req.params.id}, (err, user) => {
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
    updateUser: (req, res) => {
        UserModel.updateOne({ _id: req.body.id},{firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age}, (err, user) => {
            res.json({
                user
            })
        })
    },  
    
    deleteUser: (req, res) => {
        UserModel.deleteOne({ _id: req.body.id}, (err, user) => {
            res.json({
                user
            })
        })
    }  
}

