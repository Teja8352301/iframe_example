const serverController = require("./controllers/server-controller");
const express = require("express");
const routes = express.Router();

routes.post("/login", serverController.loginService);
module.exports = routes;
