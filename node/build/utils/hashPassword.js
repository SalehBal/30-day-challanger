import bcrypt from 'bcrypt';
const hashPassword = async (password) => {
    const saltRounds = 16;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};
export default hashPassword;
//# sourceMappingURL=hashPassword.js.map