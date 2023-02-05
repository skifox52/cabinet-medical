const express = require("express")
require("dotenv").config()
//  Create an express instance
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set("view engine", "ejs")
app.get("/", (req, res) => {
  res.status(200).render("home")
})
app.listen(process.env.PORT, () => {
  console.log(`App running at port ${process.env.PORT}`)
})
