const express = require('express');
const router = express.Router();
const roleService = require('../../services/role-service');
router.post('/create', roleService.createRole);

module.exports = router;