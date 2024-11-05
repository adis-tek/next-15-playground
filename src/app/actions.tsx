"use server";

import { redirect } from "next/navigation";

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
