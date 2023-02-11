const {
  getAllRdv,
  postRdv,
  getPostForm,
} = require("../controllers/rdvController")

const rdvRouter = require("express").Router()

rdvRouter.get("/all", getAllRdv).post("/", postRdv).get("/ajouter", getPostForm)
module.exports = rdvRouter
