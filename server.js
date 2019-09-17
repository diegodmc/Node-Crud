const express = require('express');

const mongoose = require('mongoose');

//Iniciando o app
const app = express();

//Iniciando o DB
mongoose.connect("mongodb:localhost:27017/nodepai", { useNewUrlParser: true });

//Primeira Rota
app.get('/',(req, res) => { 
                            res.send('Hello!!');
                          }
       );

app.listen(3001);