const express = require('express');
const { login } = require('../controllers/loginController');
const loginController = require('../controllers/loginController');

const router = express.Router();

router.get('/login', loginController.login);
router.post('/login', loginController.auth);
router.get('/register', loginController.register);
router.post('/register', loginController.storeUser);


module.exports = router;