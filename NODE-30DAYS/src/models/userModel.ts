import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
}

const userSchema: Schema = new mongoose.Schema({
  id: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: String, required: true },
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
