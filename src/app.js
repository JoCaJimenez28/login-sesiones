const express = require('express');

const myconnection = require('express-myconnection');
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');
const { Session } = require('express-session');

const loginRoutes = require('./routes/login');

const app = express();
app.set('port', 4000);

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'JoseCarlos',
    password: '1234',
    port: 3306,
    database: 'login'
}));

app.use(session({
    secret: 'secret',
    saveUninitialized:true,
    resave: true
}))

app.listen(app.get('port'), () => {
    console.log('listening on port', app.get('port'));
});

app.use('/', loginRoutes);

app.get('/', (req, res) =>{

    if(req.session.loggedin == true){
        res.render('home');
    }else{
        res.redirect('/login');
    }
    
});