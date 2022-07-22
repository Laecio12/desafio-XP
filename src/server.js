import 'express-async-errors';
import express from 'express';
import 'dotenv/config';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import routes from './routes/index.js';
import swaggerConfig from './docs/swagger.config.js';
import AppError from './errors/AppError.js';

const app = express();
app.use(express.json());
const swaggerDoc = swaggerJsdoc(swaggerConfig);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(routes);

app.use((err, _request, response, next) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }
  if (!err.statusCode) {
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  }
  return next();
});
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server started on port 3333 ${PORT}`));
