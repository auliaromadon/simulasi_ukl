const express = require('express')
const bodyParser = require('body-parser')
const jwt =  require('jsonwebtoken')
const mysql = require('mysql')

const app = express()
const secretKey = 'thisisverysecretKey'
const port = 5000

const db = mysql.createConnection({
    host        : '127.0.0.1',
    port        : '3306',
    user        : 'root',
    password    : '',
    database    : 'simulasi'
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))

const isAuthorized = (req, res, next) => {
    if(typeof (req.headers[header]) == 'undefined') {
        return res.status(403).json({
            success : false,
            message : 'Unauthorized.TOken is not provided'
        })
    }
    let token = req.headers[header]
    jwt.verify(token, secretKey, (err, decoded) => {
        if(err) {
            return res.status(401).json({
                success : false,
                message : 'Unauthorized'
            })
        }
    })
    next ()
}

app.post('/login', (req,res) => {
    let data = req.body.email
    let password = req.body.password
    if(username && password) {
        db.query('select * from users where username = ? and password = ?', [username, password], function(error, res, fields){
            if(res.length > 0){
                req.session.loge
            }
        })

    }
})

app.get('user', isAuthorized, (req, res) => {
    let sql = ' select'
})