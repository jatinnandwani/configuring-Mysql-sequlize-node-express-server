const express = require('express');
const users = require('./UserRoutes');
const roles = require('./RoleRoutes');

const router = express.Router();
router.use('/user', users);
router.use('/roles', roles);

module.exports = router;
