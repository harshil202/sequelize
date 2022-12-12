const express = require('express')
const cors = require('cors')
const db = require("./models")


const app = express()

//this will re-set the database everytime you start the server
db.sequelize.sync({ force: true }).then(() => {
  console.log("#droped the database and and re-synced.");
});

app.use(express.json())

app.use(express.urlencoded({extended: true}))

require("./routes/routes")(app)

var corsOptions = {
  origin: "http://localhost:3000"
}

app.use(cors(corsOptions))


app.get("/", (req,res) =>{
  res.send({
    message: "Working"
  })
})


app.listen(3000, (req,res) =>{
  console.log("Server is running on port 3000")
})