import { hash, compare } from "bcrypt";

export async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function verifyPassword(password, hashedPassword) {
  try {
    const isValid = await compare(password, hashedPassword);
    return isValid;
  } catch (error) {
    // Handle the error here (e.g., log the error, throw a custom error, etc.)
    console.error("Error during password comparison:", error);
    return false;
  }
}
