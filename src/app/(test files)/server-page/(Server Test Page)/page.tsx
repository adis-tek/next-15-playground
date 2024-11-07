export default function serverPage() {
  const date = new Date();
  const time = date.getTime();
  const isInteger = Number.isInteger(time / 2);
  const res = isInteger + "";

  return (
    <div>
      <h1>This is a server page.</h1>
      <p>
        The time was divided by 2 and then to checked to see if it was an
        integer. The result was: {res}.
      </p>
    </div>
  );
}
