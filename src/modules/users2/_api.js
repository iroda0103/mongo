const express = require("express");
const {
  postUser,
  getUsers,
  showUser,
  updateUser,
  deleteUser,
} = require("./_controllers");

const router = express.Router();

router.post("/users", postUser);
router.get("/users", getUsers);
router.get("/users/:id", showUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
