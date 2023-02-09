const {
  postPatient,
  getPatientForm,
  getAllPatients,
  getPatientById,
  getPutForm,
  putPatient,
  deletePatient,
} = require("../controllers/patientController")

const patientRouter = require("express").Router()

patientRouter
  .post("/", postPatient)
  .get("/add", getPatientForm)
  .get("/all", getAllPatients)
  .get("/:id", getPatientById)
  .get("/modifier/:id", getPutForm)
  .post("/modifier/:id", putPatient)
  .delete("/:id", deletePatient)

module.exports = patientRouter
