import NextAuth from "next-auth";
import { PrismaClient, Users } from "@prisma/client";
const prisma = new PrismaClient();
import Credentials from "next-auth/providers/credentials";
import { hashPassword, verifyPassword } from "../../../../../lib/auth";
const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    // Add your authentication providers here
    Credentials({
      // The name to display on the sign-in form (e.g., 'Email')
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        action: { label: "Action", type: "text" },
        firstName: { label: "First Name", type: "text" },
        lastName: { label: "Last Name", type: "text" },
        dateOfBirth: { label: "Date of Birth", type: "date" },
        phoneNumber: { label: "Phone Number", type: "text" },
      },

      // trying to assign a specific type to the authorize promise results in an error
      authorize: async (credentials, req) => {
        if (credentials && credentials.action === "signup") {
          const existingEmail = await prisma.users.findUnique({
            where: { email: credentials.email },
          });

          if (existingEmail) throw new Error("Email already exists in database.");

          // Hash the password and save the new user in your database
          const hashedPassword = await hashPassword(credentials.password);
          const newUser = await prisma.users.create({
            data: {
              email: credentials.email,
              hashedPassword: hashedPassword,
              firstName: credentials.firstName,
              lastName: credentials.lastName,
              dateOfBirth: credentials.dateOfBirth,
              phoneNumber: credentials.phoneNumber
            },
          });
          return newUser;
        }
        if (!credentials || !credentials.email || !credentials.password)
          throw new Error("Invalid Credentials.");
        const user = await prisma.users.findUnique({
          where: { email: credentials.email },
        });
        if (!user) throw new Error("No user found was found in the database.");
        const isValid = await verifyPassword(
          credentials.password,
          user.hashedPassword
        );
        if (!isValid) throw new Error("Your password was bad and you should feel bad.");

        return user;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session && session.user) {
        session.user.id = token.id;
      }
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
