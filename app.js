const express = require("express")
const patientRouter = require("./routes/patientRoute")
require("dotenv").config()
//  Create an express instance
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))
app.set("view engine", "ejs")
app.use("/patient", patientRouter)
app.get("/", (req, res) => {
  res.status(200).redirect("/dashboard")
})
app.get("/dashboard", (req, res) => {
  res.status(200).render("index.ejs")
})
app.use("/*", (req, res) => {
  res.status(200).render("pages/notfound")
})
app.listen(process.env.PORT, () => {
  console.log(`App running at port ${process.env.PORT}`)
})
