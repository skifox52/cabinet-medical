const db = require("../config/db")
const crypto = require("node:crypto")

class RDVModel {
  constructor(id_patient, date_rdv, heure_rdv) {
    this.id = crypto.randomUUID()
    this.id_patient = id_patient
    this.date_rdv = date_rdv
    this.heure_rdv = heure_rdv
  }
  //Insert a rdv
  save() {
    const query =
      "INSERT INTO rdv(id,id_patient,  date_rdv, heure_rdv) values (?,?,?,?)"
    const result = db.execute(query, [
      this.id,
      this.id_patient,
      this.date_rdv,
      this.heure_rdv,
    ])
    return result
  }
  //Get all rdv
  static getAllRdv() {
    const query =
      "SELECT rdv.date_rdv, rdv.heure_rdv,rdv.date_prise_rdv, patient.nom, patient.prenom FROM rdv, patient where rdv.id_patient=patient.id"
    const result = db.execute(query)
    return result
  }
}

module.exports = RDVModel
