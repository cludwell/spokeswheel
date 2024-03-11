import { Prisma, PrismaClient } from "@prisma/client";
import { getToken } from "next-auth/jwt";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
const prisma = new PrismaClient();
export async function GET(req, res) {
  if (req.method == "GET") {
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
      const bookings = await prisma.bookings.findMany({
        where: {
            conferenceId: 1
        },
        include: {
            user: true
        }
      })
    } catch (error) {
      console.error("Failed to get booking data:", error);
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
  }
}
