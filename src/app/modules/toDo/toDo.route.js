const express = require("express");
const toDoController = require("./toDo.controller");
const verifyAuthToken = require("../../middlewares/verifyAuthToken");

const router = express.Router();

router.post("/", verifyAuthToken, toDoController.createToDo);
router.get("/");
router.patch("/:id");
router.delete("/:id");

const toDoRoutes = router;
module.exports = toDoRoutes;
