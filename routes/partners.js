const express = require('express');
const bodyParser = require('body-parser');

const partnersRouter = express.Router();

partnersRouter.use(bodyParser.json());



module.exports = partnersRouter;