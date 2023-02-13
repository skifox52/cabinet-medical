const {
  getGraphData,
  getHommeFemme,
} = require("../controllers/dashboardController")

const dashboardRouter = require("express").Router()

dashboardRouter.get("/", getGraphData).get("/sexe", getHommeFemme)
module.exports = dashboardRouter
