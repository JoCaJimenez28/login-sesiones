const express = require('express');
const { login } = require('../controllers/loginController');
const loginController = require('../controllers/loginController');

const router = express.Router();

router.get('/login', loginController.login);
router.post('/login', loginController.auth);
router.get('/register', loginController.register);
router.post('/register', loginController.storeUser);
router.get('/logout', loginController.logout);
router.get('/consulta', loginController.consulta);



module.exports = router;