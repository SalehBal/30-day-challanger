import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRouter from './routers/authRouter.js';
import errorHandler from './utils/errorHandler.js';
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
app.all('*', (req, res) => { });
// ERROR HANDLER
app.all(errorHandler);
export default app;
//# sourceMappingURL=app.js.map