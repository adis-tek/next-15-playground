"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "../../utils/supabase/server";

export async function changeUserEmail(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const { error } = await supabase.auth.updateUser({
    email: formData.get("new-email") as string,
  });

  console.log(error);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/private", "layout");
  redirect("/private");
}

export async function changeUserPassword(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const { error } = await supabase.auth.updateUser({
    password: formData.get("new-password") as string,
  });

  console.log(error);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/private", "layout");
  redirect("/private");
}
