const express = require("express");
const helmet = require('helmet');
const app = express();

app.use(express.json());
app.use(helmet());

const form =  require("./routes/viroutes");

app.use("/", (req, res)=>{
    res.send("api calls are running ")
})



app.use("/api/v1", form);

//ADF Fome Routers
app.use("/api/v1", require("./routes/viroutes"));

module.exports= app ;


