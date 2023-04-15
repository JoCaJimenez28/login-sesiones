const express = require("express");
const { login } = require("../controllers/loginController");
const loginController = require("../controllers/loginController");

const router = express.Router();

router.get("/login", loginController.login);
router.post("/login", loginController.auth);
router.get("/register", loginController.register);
router.post("/register", loginController.storeUser);
router.get("/logout", loginController.logout);
router.get("/consulta", loginController.mostrarTabla);
router.get("/mostrar", loginController.mostrar);
router.post("/consulta", loginController.mostrarTabla);
router.post("/", loginController.insertarVehiculo);
router.get("/mostrar", loginController.mostrar);

router.get("/borrar", (req, res) => {
    const { id } = req.query;
    loginController.borrarVehiculo(req, res, id);
  });

module.exports = router;
