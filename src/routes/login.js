const express = require("express");
const { login } = require("../controllers/loginController");
const loginController = require("../controllers/loginController");

const router = express.Router();

router.get("/login", loginController.login);
router.post("/login", loginController.auth);
router.get("/register", loginController.register);
router.post("/register", loginController.storeUser);
router.get("/logout", loginController.logout);
router.get("/consulta", loginController.consulta);
//(router.post("/consulta", loginController.consultarVehiculos);
router.get("/mostrar", loginController.mostrar);
router.post("/consulta", loginController.mostrarTabla);
router.post("/", loginController.insertarVehiculo);
router.put("/edit", loginController.editarVehiculo);

module.exports = router;
