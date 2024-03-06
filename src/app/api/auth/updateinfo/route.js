import { getToken } from "next-auth/jwt";
import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../../../../../lib/auth";
const prisma = new PrismaClient();

export async function PUT(req, res) {
  if (req.method == "PUT") {
    try {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });
      if (!token) {
        return new Response(
          JSON.stringify({
            error: "Token not found",
          }),
          {
            status: 401,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
      const { firstName, lastName, dateOfBirth, email, password } =
        await req.json();
      const userId = parseInt(token.sub);
      const hashedPassword = await hashPassword(password);
      const updatedUser = await prisma.users.update({
        where: {
          id: userId,
        },
        data: {
          firstName,
          lastName,
          dateOfBirth,
          email,
          hashedPassword,
          updatedAt: new Date().toISOString(),
        },
      });
      if (updatedUser) {
        return new Response(
          JSON.stringify({
            ...updatedUser
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        return new Response(JSON.stringify({ error: "User not found" }), {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    } catch (error) {
      console.error("Failed to retrieve user data:", error);
      return new Response(JSON.stringify({ error: "Internal server error" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
}
