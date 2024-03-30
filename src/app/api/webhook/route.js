import Stripe from "stripe";
import getRawBody from "raw-body";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});
const endpointSecret = process.env.WEBHOOK_SECRET;
// not doing this results in a next.js 'stream not readable error'
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req, res) {
  try {
    console.log("req.headers", req.headers);
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
    const sig = req.headers["stripe-signature"];
    const rawBody = await getRawBody(req);
    let event;
    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
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
    console.log("event.type", JSON.stringify(event.type));
    if (event.type == "checkout.session.completed") {
      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
        event.data.object.id,
        {
          expand: ["line_items"],
        }
      );
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

      try {
        // business logic, save the data, change customer account info etc
      } catch (error) {
        console.error("LINE ITEM ERROR", error);
      }
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
