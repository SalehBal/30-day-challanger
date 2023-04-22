import errorHandler from './middlewares/errorHandler.js';
import authRouter from './routers/authRouter.js';
import AppError from './utils/AppError.js';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// APP
const app = express();
// CORS
app.use(cors());
// LOG EVRY REQUEST
app.use(morgan('dev'));
// Get acces to req body
app.use(express.json());
app.post('/test', (req, res, next) => {
    const err = new AppError(`Can't find any shit on this server!`).Unauthorized();
    console.log(err);
    throw err;
});
// AUTH ROUTER
app.use('/auth', authRouter);
// UNHANDLED ROUTES
app.all('*', (req, res, next) => {
    throw new AppError(`Can't find ${req.originalUrl} on this server!`).NotFound();
});
// ERROR HANDLING MIDDLEWARE
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map