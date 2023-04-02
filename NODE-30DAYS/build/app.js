import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRouter from './routers/authRouter.js';
import AppError from './utils/AppError.js';
import errorHandler from './middlewares/errorHandler.js';
// APP
const app = express();
// CORS
app.use(cors());
// LOG EVRY REQUEST
app.use(morgan('dev'));
// Get acces to req body
app.use(express.json());
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