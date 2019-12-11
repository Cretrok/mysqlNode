const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const path = require('path');
const app = express();

const customerRoutes = require('./routes/customer');


app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'mysqlnode'
}, 'single'));

//routes
app.use('/', customerRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
	console.log('Servidor Corriendo en el puerto 3000');
});