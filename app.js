const express = require("express");
const helmet = require('helmet');
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(helmet());

const form =  require("./routes/viroutes");





app.use("/api/v1", form);

//ADF Fome Routers
app.use("/api/v1", require("./routes/viroutes"));

module.exports= app ;


