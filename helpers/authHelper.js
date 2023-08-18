import bcrypt from "bcrypt";
import { error } from "console";

export const hashPassword = async (password) => {
  try {
  
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch {
    console.log(error);
  }
};
export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
