const express = require('express');
const router = express.Router();

const addRoutes = require('./addRoutes');
const showRoutes = require('./showRoutes');

router.use("/add",addRoutes);
router.use("/show",showRoutes);

module.exports = router;