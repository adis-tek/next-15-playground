import { changeUserPassword } from "../actions";

export default function ChangePassword() {
  return (
    <div>
      <h1>Change Password</h1>
      <form>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" name="new-password" />
        <button type="submit" formAction={changeUserPassword}>
          Change Password
        </button>
      </form>
    </div>
  );
}
