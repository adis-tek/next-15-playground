import { changeUserEmail } from "../actions";

export default function ChangeEmail() {
  return (
    <div>
      <h1>Change Email</h1>
      <form>
        <label htmlFor="new-email">New Email</label>
        <input type="email" id="new-email" name="new-email" />
        <button type="submit" formAction={changeUserEmail}>
          Change Email
        </button>
      </form>
    </div>
  );
}
