import initStripe from "stripe";
import { createClient } from "../../../utils/supabase/server";

interface RequestBody {
  record: {
    id: string;
  };
}

interface Request {
  body: RequestBody;
}

interface Response {
  send: (body: { message: string }) => void;
}

const handler = async (req: Request, res: Response) => {
  const supabase = await createClient();
  // Create new stripe customer
  const stripe = new initStripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-10-28.acacia",
  });

  const customer = await stripe.customers.create({
    name: req.body.record.id,
  });

  supabase
    .from("user_data")
    .update({ user_stripe_id: customer.id })
    .eq("id", req.body.record.id);

  res.send({ message: `Customer created: ${customer.id}` });
};

export default handler;
