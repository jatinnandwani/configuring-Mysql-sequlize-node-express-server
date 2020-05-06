const express = require('express');
const router = express.Router();
const userService = require('../../services/user-service');
router.post('/create', userService.createUser);
router.post('/testing', userService.testingCreatingUSer);
router.get('', userService.getAllTheUsers);

module.exports = router;