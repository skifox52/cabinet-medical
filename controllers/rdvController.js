const RDVModel = require("../models/RdvModel")
const PatientModel = require("../models/PatientModel")

//Get all rdv
exports.getAllRdv = async (req, res) => {
  try {
    const [rdv, _] = await RDVModel.getAllRdv()
    res.status(200).render("pages/getRdv", { rdv })
  } catch (err) {
    res.status(400)
    console.error(err)
  }
}
//Get rdv POST Form
exports.getPostForm = async (req, res) => {
  const [patients, _] = await PatientModel.getAll()
  const [avr, __] = await RDVModel.getAvaibleRdv()
  res.status(200).render("pages/postRdv", { patients, avr })
}
//Post a rdv
exports.postRdv = async (req, res) => {
  try {
    const { patient, date, heure } = req.body
    const newRdv = new RDVModel(patient, date, heure)
    newRdv.save()
    res.status(201).redirect("/rdv/all")
  } catch (err) {
    res.status(400)
    console.error(err)
  }
}
//Delete a rdv
exports.deleteRdv = async (req, res) => {
  const { id } = req.params
  await RDVModel.deleteRdv(id)
  res.status(204).end()
}
