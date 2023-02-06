const {
  postPatient,
  getPatientForm,
} = require("../controllers/patientController")

const patientRouter = require("express").Router()

patientRouter.post("/", postPatient).get("/add", getPatientForm)

module.exports = patientRouter
