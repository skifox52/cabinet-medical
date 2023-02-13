const express = require("express")
const patientRouter = require("./routes/patientRoute")
const rdvRouter = require("./routes/rdvRouter")
const chartJs = require("chart.js")
const dashboardRouter = require("./routes/dashboardRouter")
require("dotenv").config()
//  Create an express instance
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))
app.set("view engine", "ejs")
app.use("/patient", patientRouter)
app.use("/rdv", rdvRouter)
app.use("/dashboardd", dashboardRouter)
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
