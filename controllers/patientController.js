const PatientModel = require("../models/PatientModel")

//Post a patient
exports.postPatient = async (req, res) => {
  try {
    const { nom, prenom, adresse, dn, sexe, tel, gs } = req.body
    const newUser = new PatientModel(nom, prenom, adresse, dn, sexe, tel, gs)
    await newUser.save()
    res.status(201).render("index")
  } catch (err) {
    res.status(400)
    console.error(err)
  }
}
//Display patient form
exports.getPatientForm = (req, res) => {
  res.status(200).render("pages/postPatient")
}
