const express = require('express');

const mongoose = require('mongoose');

const requireDir = require('require-dir');

//Iniciando o app
const app = express();

//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", { 
                                                      useNewUrlParser: true 
                                                    }
                );

requireDir('./src/models');

const Product = mongoose.model('Product');

//Primeira Rota
app.get('/',(req, res) => { 
                           Product.create({
                                            title: 'Node', 
                                            description: 'Node JS',
                                            url: 'https://nodejs.org/en/'
                           });
                            return res.send('Hello!!');
                          }
       );

app.listen(3001);