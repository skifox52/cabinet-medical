const {
  getAllRdv,
  postRdv,
  getPostForm,
  deleteRdv,
} = require("../controllers/rdvController")

const rdvRouter = require("express").Router()

rdvRouter
  .get("/all", getAllRdv)
  .post("/", postRdv)
  .get("/ajouter", getPostForm)
  .delete("/:id", deleteRdv)
module.exports = rdvRouter
