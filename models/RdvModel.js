const db = require("../config/db")
const crypto = require("node:crypto")

class RDVModel {
  constructor(id_patient, info_rdv, date_rdv, heure_rdv) {
    this.id = crypto.randomUUID()
    this.id_patient = id_patient
    this.info_rdv = info_rdv
    this.date_rdv = date_rdv
    this.heure_rdv = heure_rdv
  }
  //Insert a rdv
  save() {
    const query =
      "INSERT INTO rdv(id_patient, info_rdv, date_rdv, heure_rdv) values (?,?,?,?)"
    const result = db.execute(query, [
      this.id_patient,
      this.info_rdv,
      this.date_rdv,
      this.heure_rdv,
    ])
    return result
  }
  //Get all rdv
  static getAllRdv() {
    const query = "SELECT * FROM rdv"
    const result = db.execute(query)
    return result
  }
}

module.exports = RDVModel