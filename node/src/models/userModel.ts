import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  id: string;
  userName: string;
  email: string;
  password: string;
  calendars: string[];
}

const userSchema: Schema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  calendars: [{ type: String }],
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
