import { Prisma, PrismaClient } from "@prisma/client";
import { getToken } from "next-auth/jwt";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { Ruthie } from "next/font/google";
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
      const conferenceId = parseInt(req.url.split("/").at(-1));
      // console.log("ENTERING ROUTE======================", conferenceId);
      const bookings = await prisma.bookings.findMany({
        where: {
          conferenceId: conferenceId,
        },
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              phoneNumber: true,
              email: true,
              dateOfBirth: true,
              createdAt: true,
              updatedAt: true,
              bookings: false,
              hashedPassword: false,
            },
          },
        },
      });

      // console.log("BOOKINGS ROUTE======================", bookings);

      if (bookings) {
        return new Response(JSON.stringify({ bookings: bookings }), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
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
