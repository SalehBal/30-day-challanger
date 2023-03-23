import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// APP
const app = express();

// CORS
app.use(cors());

// LOG EVRY REQUEST
app.use(morgan('dev'));

// Get acces to req body
app.use(express.json());

// UNHANDLED ROUTES
app.all('*', (req: express.Request, res: express.Response) => {});

export default app;
