const express = require('express');
const app = express();
const port = 3000;
var calculatorRoute = require('./routes/calculatorRoute');
app.use('/calculator',calculatorRoute)

//Swagger
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);

app.get('/', express.static('public'));
app.listen(port, ()=>{console.log(`app is runing at http://localhost:${port}`)} )

//npm install -g nodemon