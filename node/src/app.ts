const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// APP
const app = express();

// CORS
app.use(cors());

// LOG EVRY REQUEST
app.use(morgan('dev'));

// Get acces to req body
app.use(express.json());

// UNHANDLED ROUTES
app.all('*', (req, res, next) => {
  const err = new AppError(`Can't find ${req.originalUrl} on this server!`, 404);
  next(err);
});

export default app;
