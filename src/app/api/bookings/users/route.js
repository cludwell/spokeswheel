import { getToken } from "next-auth/jwt";
import { PrismaClient, Bookings } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req, res) {
  if (req.method == "GET") {
    try {
      const token = await getToken({
        req,
        secret: process.env.NECTAUTH_SECRET,
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
      const bookings = await prisma.bookings.findMany({
        where: {
          userId: id,
        },
      });
      if (bookings) {
        return new Response(JSON.stringify({ bookings }), {
          status: 200,
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
