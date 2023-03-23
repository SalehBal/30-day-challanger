import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';
// adding environment variables
dotenv.config({ path: './config.env' });
// mongo db connection strinng
const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.lpj0afg.mongodb.net/?retryWrites=true&w=majority`;
// port no
const port = 2002;
mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    app.listen(port, () => {
        console.log('Server listening the port 127.0.0.1:' + port + '/');
    });
    console.log('Connected to MongoDB');
})
    .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
//# sourceMappingURL=server.js.map