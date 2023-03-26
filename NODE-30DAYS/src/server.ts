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
    app.listen(port, () => {
      console.log('Server listening the port 127.0.0.1:' + port + '/');
    });
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
