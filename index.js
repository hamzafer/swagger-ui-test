const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();
const port = 3000;

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Customer API',
            description: 'Customer API Information',
            version: '1.0.0'
        }
    },
    apis: ['index.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (req, res) => res.send('Hello World!'));

/**
 * @swagger
 * /api:
 *   get:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 */
app.get('/api', (req, res) => res.send(
    {
        "name": "John Doe",
        "age": 30
    }
));

app.listen(port, () => console.log('Server started on port ' + port));
