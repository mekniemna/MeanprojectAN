
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcrypt');
var User = require('./models/user');


const app = express()
mongoose.connect('mongodb://localhost:27017/database');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, X-Requested-with, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS, PATCH, PUT');
    next();
});

//add user  /register
app.post("/users/register", async (req, res) => {
    const email = await User.findOne({ email: req.body.email });
    if (email) {
        res.status(200).json({
            message: "0",
        });
    }
    bcrypt.hash(req.body.password, 10).then((hash) => {
        console.log('here back')
        const user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            password: hash
        });
        user.save().then(
            res.status(200).json({
                message: "1"
            })
        );

    })

});

// login by email et password 
app.post("/users/login",(req,res)=>{
    User.findOne({email:req.body.email}).then((findedUser)=>{
        if(!findedUser){
            res.status(200).json({
                message: "0"
            })
        }
        return bcrypt.compare(req.body.password, findedUser.password)
    }).then((correctPassword)=>{
        if(!correctPassword){
            res.status(200).json({
                message:"1"
            })
        }
        User.findOne({email: req.body.email}).then((finalUser)=>{
            let user = {
                id: finalUser._id,
                firstname: finalUser.firstname,
                lastname:finalUser.lastname,
            }
            res.status(200).json({
                user:user,
                message:"2"
            })
        })
    })
})








module.exports = app
