
//importar pacotes 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//ROTAS
var indexRoute = require('./routes/index-route');
var productRoute = require('./routes/products-route');
const customerRoute = require('./routes/customer-route');

//var config = require('./config')
//PERSISTÊNCIA
mongoose.connect('mongodb://localhost/bdCrud');
//mongoose.connect(config.connectionString);

//Configurar a app para usar o body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Definindo a porta onde o servidor vai responder
var port = process.env.port || 3000;

//Dedfinindo uma rota padrão para as minhas apis
app.use('/api', indexRoute);
//rotas para produtos
app.use('/products', productRoute);
//rotas para customer
app.use('/customers', customerRoute);

app.listen(port);
console.log("API up and running! on port " + port);


