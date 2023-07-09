const express = require("express");
const authRoutes = require("../modules/auth/auth.route");
const toDoRoutes = require("../modules/toDo/toDo.route");

const routes = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/todos",
    route: toDoRoutes,
  },
];

moduleRoutes.forEach((route) => routes.use(route.path, route.route));

module.exports = routes;
