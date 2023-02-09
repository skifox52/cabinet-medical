const PatientModel = require("../models/PatientModel")

//Post a patient
exports.postPatient = async (req, res) => {
  try {
    const { nom, prenom, adresse, dn, sexe, tel, gs } = req.body
    const newUser = new PatientModel(nom, prenom, adresse, dn, sexe, tel, gs)
    await newUser.save()
    res.status(201).redirect("/patient/all")
  } catch (err) {
    res.status(400)
    console.error(err)
  }
}
//Display patient form
exports.getPatientForm = (req, res) => {
  res.status(200).render("pages/postPatient")
}

//Get all patients
exports.getAllPatients = async (req, res) => {
  try {
    const [patients, _] = await PatientModel.getAll()
    res.status(200).render("pages/getPatient", { patients })
  } catch (err) {
    res.status(400)
    console.error(err)
  }
}
//Get patient details
exports.getPatientById = async (req, res) => {
  try {
    const { id } = req.params
    const [patient, _] = await PatientModel.getOnePatient(id)
    res.status(200).render("pages/singlePatient", { patient })
  } catch (err) {
    res.status(400)
    console.error(err)
  }
}
//Get put page
exports.getPutForm = async (req, res) => {
  const { id } = req.params
  const [patient, _] = await PatientModel.getOnePatient(id)
  res.status(200).render("pages/putPatient", { patient })
}
//Put patient
exports.putPatient = async (req, res) => {
  try {
    const { id } = req.params
    const { nom, prenom, sexe, adresse, tel, gs } = req.body
    await PatientModel.putOne(id, {
      nom,
      prenom,
      adresse,
      sexe,
      numero_telephone: tel,
      group_sanguin: gs,
    })
    res.status(200).redirect("/patient/all")
  } catch (err) {
    res.status(400)
    console.error(err)
  }
}
//Delete a patient
exports.deletePatient = async (req, res) => {
  try {
    const { id } = req.params
    await PatientModel.deleteOne(id)
    res.status(202).end()
  } catch (err) {
    res.status(400)
    console.error(err)
  }
}
