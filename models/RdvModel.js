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
      "SELECT rdv.id,rdv.date_rdv, rdv.heure_rdv,rdv.date_prise_rdv, patient.nom, patient.prenom FROM rdv, patient where rdv.id_patient=patient.id"
    const result = db.execute(query)
    return result
  }
  //Get Avaible rdvs
  static getAvaibleRdv() {
    const query =
      "SELECT date_rdv,group_concat(heure_rdv) as heureArray FROM rdv group by date_rdv"
    const result = db.execute(query)
    return result
  }
  //Delete rendez-vous
  static deleteRdv(id) {
    const query = `DELETE FROM rdv WHERE id='${id}'`
    const result = db.execute(query)
    return result
  }
  //Count rendez-vous
  static count() {
    const query = "SELECT COUNT(*) as rdvCount from rdv"
    const result = db.execute(query)
    return result
  }
}

module.exports = RDVModel
