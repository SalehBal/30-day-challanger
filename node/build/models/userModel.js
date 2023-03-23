import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    calendars: [{ type: String }],
});
const User = mongoose.model('User', userSchema);
export default User;
//# sourceMappingURL=userModel.js.map