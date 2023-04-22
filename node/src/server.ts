import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';
// adding environment variables
dotenv.config({ path: './config.env' });
// port no
const port = 2002;

const connectionpOptions = {
  dbName: `main`,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.DBURI, connectionpOptions as any)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log('Server listening the port 127.0.0.1:' + port + '/');
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
