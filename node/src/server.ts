import mongoose from 'dotenv';
import dotenv from 'dotenv';
import app from './app';

dotenv.config({ path: './config.env' });
console.log(process.env.DBUSER);
const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.lpj0afg.mongodb.net/?retryWrites=true&w=majority`;
const port = 2002;
// mongoose
//   .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true } as any)
//   .then(() => {
//     app.listen(port, () => {
//       console.log('Server listening the port 127.0.0.1:' + port + '/');
//     });
//     console.log('Connected to database !');
//   })
//   .catch(() => console.log('Something went wrong !'));
