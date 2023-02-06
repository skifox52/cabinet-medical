const db = require("../config/db")
const crypto = require("node:crypto")

class PatientModel {
  constructor(
    nom,
    prenom,
    adresse,
    date_de_naissance,
    sexe,
    numero_telephone,
    group_sanguin
  ) {
    this.id = crypto.randomUUID()
    this.nom = nom
    this.prenom = prenom
    this.adresse = adresse
    this.date_de_naissance = date_de_naissance
    this.sexe = sexe
    this.numero_telephone = numero_telephone
    this.group_sanguin = group_sanguin
  }
  save() {
    const query = "INSERT INTO patient values(?,?,?,?,?,?,?,?)"
    const result = db.execute(query, [
      this.id,
      this.nom,
      this.prenom,
      this.adresse,
      this.date_de_naissance,
      this.sexe,
      this.numero_telephone,
      this.group_sanguin,
    ])
    return result
  }
}

module.exports = PatientModel
