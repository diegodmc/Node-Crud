const express = require('express');

const mongoose = require('mongoose');

const requireDir = require('require-dir');

const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors(/*aqui dentro quais dominios pode chamar, parametros de segurança*/ ));

mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
     {useNewUrlParser: true}

);
requireDir('./src/models');

app.use("/api", require("./src/Router"));


app.listen(3001);