import { getToken } from "next-auth/jwt";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";

export async function GET(req, res) {
  // Changed to default export
  if (req.method === "GET") {
    try {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      if (!token) {
        return new Response(JSON.stringify({ error: "Token not found" }), {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        });
      }

      const userId = parseInt(token.sub);
      const user = await prisma.users.findUnique({
        where: {
          id: userId,
        },
      });

      if (user) {
        // Use status 200 for successful data retrieval
        return new Response(
          JSON.stringify({
            firstName: user.firstName,
            lastName: user.lastName,
            dateOfBirth: user.dateOfBirth,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            phoneNumber: user.phoneNumber
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        // Handle the case where the user is not found
        return new Response(JSON.stringify({ error: "User not found" }), {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    } catch (error) {
      console.error("Failed to retrieve user data:", error);
      if (isDynamicServerError(error)) {
        throw error;
      }
      return new Response(JSON.stringify({ error: "Internal server error" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } else {
    // Handle unsupported HTTP methods
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
