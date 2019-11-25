const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));

app.listen(app.get('port'), () => {
	console.log('Servidor Corriendo en el puerto 3000');
});