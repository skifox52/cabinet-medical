const PatientModel = require("../models/PatientModel")
const RDVModel = require("../models/RdvModel")

exports.getGraphData = async (req, res) => {
  try {
    const [patientCount, _] = await PatientModel.count()
    const [rdvCount, __] = await RDVModel.count()
    res.status(200).json([patientCount, rdvCount])
  } catch (error) {
    res.status(400)
    console.error(error)
  }
}

exports.getHommeFemme = async (req, res) => {
  try {
    const [[homme, _], [femme, __]] = await Promise.all(
      PatientModel.getSexeCount()
    )
    res.status(200).json([homme, femme])
  } catch (error) {
    res.status(400)
    console.error(error)
  }
}
