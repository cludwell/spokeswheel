import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextApiRequest, NextApiResponse } from "next";
export async function PUT(NextApiRequest, NextApiResponse) {
  if (NextApiRequest.method == "PUT") {
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
      const userId = parseInt(token.sub);
      const {
        conferenceId,
        photoConsent,
        paid,
        emergencyName,
        emergencyNumber,
        emergencyRelation,
        emailList,
        textUpdates,
        dietaryRestrictions,
        allergies,
        notes,
        specialAccomodations,
        lodging,
        id,
      } = await NextApiRequest.json();
      const updatedBooking = await prisma.bookings.update({
        where: {
          id: id,
          userId: userId,
        },
        data: {
          conferenceId,
          photoConsent,
          paid,
          emergencyName,
          emergencyNumber,
          emergencyRelation,
          emailList,
          textUpdates,
          dietaryRestrictions,
          allergies,
          notes,
          specialAccomodations,
          lodging,
        },
      });
      if (updatedBooking) {
        return new Response(
          JSON.stringify({
            ...updatedBooking,
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        return new Response(JSON.stringify({ error: "Booking not found" }), {
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
