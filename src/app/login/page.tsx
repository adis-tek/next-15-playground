import { login, signup, sendRecoveryEmail } from "../login/actions";

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
      <label htmlFor="recoveryEmail">Recovery Email</label>
      <input id="recoveryEmail" name="recoveryEmail" type="email" />
      <button formAction={sendRecoveryEmail}>Recover</button>
    </form>
  );
}
