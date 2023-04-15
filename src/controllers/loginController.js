const bcrypt = require("bcrypt");

function login(req, res) {
  if (req.session.loggedin != true) {
    res.render("login/index");
  } else {
    res.redirect("/");
  }
}

function auth(req, res) {
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM usuarios WHERE correo = ?",
      [data.correo],
      (err, userdata) => {
        if (userdata.length > 0) {
          console.log(userdata);
          userdata.forEach((element) => {
            bcrypt.compare(data.password, element.password, (err, isMatch) => {
              if (!isMatch) {
                res.render("login/index", {
                  error: "Error: Contraseña incorrecta",
                });
              } else if (element.tipoUsuario === "Administrador") {
                req.session.loggedin = true;
                req.session.name = element.name;

                res.redirect("/");
              } else {
                req.session.loggedin = true;
                req.session.name = element.name;
                req.getConnection((err,conn) =>{
                    conn.query(
                        "SELECT * FROM vehiculos ORDER BY id asc",
                         (err, rows) => {
                          if (err) {
                            req.flash("error", err);
                            res.render("list", { page_title: "Users - Node.js", data: "" });
                          } else {
                            console.log(rows);
                            res.render("login/consultaUsuario", { table: true, data: rows });
                          }
                        });
                    });
              }
            });
          });
        }
      }
    );
  });
}

function register(req, res) {
  if (req.session.loggedin != true) {
    res.render("login/register");
  } else {
    res.redirect("/");
  }
}

function nosotros(req, res) {
    res.render("login/nosotros");
}

function storeUser(req, res) {
  const data = req.body;
  bcrypt.hash(data.password, 12).then((hash) => {
    data.password = hash;
    console.log(data);
    req.getConnection((err, conn) => {
      conn.query("INSERT INTO usuarios SET ?", [data], (err, rows) => {
        res.redirect("/");
      });
    });
  });
}

function logout(req, res) {
  if (req.session.loggedin == true) {
    req.session.destroy();
  }
  res.redirect("/login");
}

function consulta(req, res) {
  if (req.session.loggedin != true) {
    res.render("login/index");
  } else {
    res.render("login/consulta", { table: true, data: "" });
  }
}

function insertarVehiculo(req, res) {
  const data = req.body;
  console.log(data);

  req.getConnection((err, conn) => {
    conn.query("INSERT INTO vehiculos SET ?", [data], (err, rows) => {
      res.redirect("/");
    });
  });
}

function consultarVehiculos(req, res) {
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM vehiculos", (err, userdata) => {
      console.log(userdata);
      res.redirect("login/consulta");
    });
  });
}

function mostrar(req, res) {
  // if(req.session.loggedin == true){
  res.render("login/mostrar");
  // }
  // res.redirect('/login');
}

/* GET home page. */
function mostrarTabla(req, res, next) {
  
  req.getConnection((err,conn) =>{
    conn.query(
        "SELECT * FROM vehiculos ORDER BY id asc",
         (err, rows) => {
          if (err) {
            req.flash("error", err);
            res.render("list", { page_title: "Users - Node.js", data: "" });
          } else {
            console.log(rows);
            res.render("login/consulta", { table: true, data: rows });
          }
        });
    });
    
}

function editarVehiculo(req, res) {
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      `UPDATE vehiculos SET ? WHERE id= ${data.id}`,
      [data],
      (err, rows) => {
        res.redirect("/");
      }
    );
  });
}

function borrarVehiculo(req, res, id) {

  console.log('id: ', id);
  req.getConnection((err, conn) => {
    conn.query(`DELETE FROM vehiculos WHERE id= ${id}`, (err, rows) => {
        console.log(rows);
        conn.query(
            "SELECT * FROM vehiculos ORDER BY id asc",
             (err, rows) => {
              if (err) {
                req.flash("error", err);
                res.render("list", { page_title: "Users - Node.js", data: "" });
              } else {
                console.log(rows);
                res.render("login/consulta", { table: true, data: rows });
              }
            });
    });
  });
}



module.exports = {
  login,
  register,
  storeUser,
  auth,
  logout,
  consulta,
  mostrar,
  mostrarTabla,
  insertarVehiculo,
  consultarVehiculos,
  editarVehiculo,
  borrarVehiculo,
  nosotros,
};
