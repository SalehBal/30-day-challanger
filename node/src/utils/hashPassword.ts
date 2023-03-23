import bcrypt from 'bcrypt';
const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 16;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};
export default hashPassword;
