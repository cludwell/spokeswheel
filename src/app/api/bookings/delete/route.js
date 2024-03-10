import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { getToken } from "next-auth/jwt";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";

export async function DELETE(req, res) {
  if (req.method == "DELETE") {
    try {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });
      if (!token) {
        return new Response(
          JSON.stringify({
            error: "Unauthorized access.",
          }),
          {
            status: 404,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
      const userId = parseInt(token.sub);
      const { bookingId } = await req.json();
      const deletedBooking = await prisma.bookings.delete({
        where: {
          id: bookingId,
          userId: userId,
        },
      });
      if (deletedBooking) {
        return new Response(
          JSON.stringify({
            deletedBooking,
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
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
  }
}
