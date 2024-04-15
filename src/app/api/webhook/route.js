import Stripe from "stripe";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});
const endpointSecret = process.env.WEBHOOK_SECRET;

export async function POST(req, res) {
  try {
    // console.log("req.headers", req.headers);
    if (req.method !== "POST")
      return new Response(
        JSON.stringify({ error: "Only POST requests allowed" }),
        {
          status: 405,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    const sig = req.headers.get("stripe-signature");
    const rawBody = await req.text(); //getRawBody(req);
    // console.log("rawbody", rawBody);
    let event;
    // console.log("BEFORE TRY CATCH=================================",);
    try {
      // console.log('BEFORE EVENT')
      event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
      // console.log("event", event.data.object.receipt_email);
    } catch (err) {
      return new Response(
        JSON.stringify({ "Webhook Error": `${err.message}` }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    let userEmail;

    if (
      event.type == "checkout.session.completed" ||
      event.type == "charge.succeeded"
    ) {
      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
        event.data.object.id,
        {
          expand: ["line_items"],
        }
      );
      // console.log("session ===========================", sessionWithLineItems);

      userEmail = event.data.object.receipt_email
        ? event.data.object.receipt_email
        : sessionWithLineItems.customer_details.email;
      const lineItems = sessionWithLineItems.line_items;
      if (!lineItems)
        return new Response(
          JSON.stringify({ error: "Internal server error" }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      // const session = event.data.object;
      // console.log("SESSION", session.metadata);
      try {
        // business logic, save the data, change customer account info etc
      } catch (error) {
        console.error("LINE ITEM ERROR", error);
      }
    }
    // find the booking and update the paid status
    // console.log('USER EMAIL',userEmail)
    const user = await prisma.users.findUnique({
      where: {
        email: userEmail
      },
    });
    if (user) {
      // console.log("USEEEEER", user, "useremailA", userEmail);
      const booking = await prisma.bookings.findFirst({
        where: {
          conferenceId: 1,
          userId: user.id,
        },
      });
      const updated = await prisma.bookings.update({
        where: {
          id: booking.id,
        },
        data: {
          paid: true,
        },
      });
      // console.log("BOOOOOOKING", updated);
    }
    return new Response(JSON.stringify({ message: "success!" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
