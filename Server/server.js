const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static("../Client/", {index:"mainmenu.html"}))

app.listen(8000)