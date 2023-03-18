const bcrypt = require('bcrypt');

function login(erq, res) {
    res.render('login/index');
}

function auth(req,res) {
    const data = req.body;
    
    req.getConnection((err,conn) =>{
        conn.query('SELECT * FROM usuarios WHERE correo = ?', [data.correo], (err,userdata) =>{
            if(userdata.length > 0){                
                console.log('Hello');                
            }
        });
    });
}

function register(erq, res) {
    res.render('login/register');
}

function storeUser(req,res){
    const data = req.body;

    req.getConnection((err,conn) =>{
        conn.query('SELECT * FROM usuarios WHERE correo = ?', [data.correo], (err,userdata) =>{
            if(userdata.length > 0){                
                res.render('login/register', {error: 'Error: ya existe u usuario con ese correo'});
            }else{
                bcrypt.hash(data.password, 12).then(hash => {
                    data.password = hash;
                    console.log(data);
            
                    req.getConnection((err,conn) => {
                        conn.query('INSERT INTO usuarios SET ?', [data], (err, rows) => {
                            res.redirect('/');
                        });
                    });
                });
            }
        });
    });

    
}

module.exports = {
    login,
    register,
    storeUser,
    auth
}