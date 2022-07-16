import express from 'express';
import 'dotenv/config';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import routes from './routes/index.js';
import swaggerConfig from './docs/swagger.config.js';

const app = express();
app.use(express.json());
const swaggerDoc = swaggerJsdoc(swaggerConfig);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(routes);

app.listen(3333, () => console.log('Server started on port 3333'));
