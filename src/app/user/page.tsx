import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

import ChangeEmail from "./components/change-email";
import ChangePassword from "./components/change-password";

export default async function UserPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      <p>Hello {data.user.email}</p>
      <ChangeEmail />
      <ChangePassword />
    </div>
  );
}
