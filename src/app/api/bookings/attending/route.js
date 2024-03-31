import { getToken } from "next-auth/jwt";
import { PrismaClient, Bookings } from "@prisma/client";
const prisma = new PrismaClient();
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";

export async function POST(req, res) {
  if (req.method == "POST") {
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
        paymentAmount,
        paymentIntentId,
        paymentMethodId
      } = await req.json();
      const userId = parseInt(token.sub);

      const newBooking = await prisma.bookings.create({
        data: {
          conferenceId: conferenceId,
          photoConsent: photoConsent,
          paid: paid,
          paymentAmount: paymentAmount,
          paymentIntentId: paymentIntentId,
          paymentMethodId: paymentMethodId,
          emergencyName: emergencyName,
          emergencyNumber: emergencyNumber,
          emergencyRelation: emergencyRelation,
          emailList: emailList,
          textUpdates: textUpdates,
          dietaryRestrictions: dietaryRestrictions,
          allergies: allergies,
          notes: notes,
          specialAccomodations: specialAccomodations,
          lodging: lodging,
          userId: userId,
        },
      });
      if (newBooking)
        return new Response(JSON.stringify({ newBooking }), {
          status: 201,
          headers: {
            "Content-Type": "application/json",
          },
        });
      else
        return new Response(
          JSON.stringify({
            error: "There was a database error processing your request",
          }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
    } catch (error) {
      console.error("Failed to create booking data:", error);
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
