const mongoose = require('mongoose')
const {UserModel} = require('../models/user')

module.exports = {
  
    user: (req, res) => {
        var id = req.params.id;
        var user = users.find(u => u.id == id);
        if (user == null || user == undefined) {
            return res.status(404).render('error', {});
        }
       return res.status(200).render('user', {
            user
        })
    }, 
    users: (req, res) => {
       
        res.status(200).render('users', {
            users
        })
    },
    addUser: (req, res) => {
        
        const User = new UserModel({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age
            
        })
   
        User.save({}, (err, thing) => {
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

   
        
    },

    getUsers: (req, res) => {
        UserModel.find({}, (err, things) => {
            if (err) {
                res.status(500).json({
                    message: 'Error when getting things',
                    error: err.message
                })
            } else {
                res.status(200).json({
                    message: 'Things retrieved',
                    things
                })
            }
        })
    },
    getUserById: (req, res) => {
        UserModel.find({}, (err, thing) => {
            if (err) {
                res.status(500).json({
                    message: 'Error when getting thing',
                    error: err.message
                })
            }
            else {
                res.status(200).json({
                    message: 'Thing retrieved',
                    thing
                })
            }
        })
    },
    deleteUser: (req, res) => {
        UserModel.deleteOne({ id: req.body.id}, (err, things) => {
            res.json({
                things
            })
        })
    }  
}

