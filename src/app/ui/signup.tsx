"use client";

import { useActionState } from "react";
import { createUser } from "../actions";

const initialState = {
  message: "",
};

export default function SignUp() {
  const [state, formAction] = useActionState(createUser, initialState);
  return (
    <div>
      <h1>Sign Up</h1>
      <p>Sign up to access the site.</p>
      <form action={formAction}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <p aria-live="polite">{state?.message}</p>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
