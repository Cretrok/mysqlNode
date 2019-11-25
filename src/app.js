const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');

app.listen(app.get('port'), () => {
	console.log('Servidor Corriendo en el puerto 3000');
});