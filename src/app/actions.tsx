"use server";

import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export async function createUser(prevState: any, formData: FormData) {
  const date = new Date();
  const time = date.getTime();
  const isInteger = Number.isInteger(time / 2);
  const res = isInteger;

  if (!res) {
    return { message: "Please enter a valid email address." };
  }

  redirect("/dashboard");
}

export async function signOut() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  console.log(error);

  if (error) {
    redirect("/error");
  }

  redirect("/");
}
