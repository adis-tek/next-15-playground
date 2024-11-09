export async function GET() {
  const res = await fetch(
    `https://worldtimeapi.org/api/timezone/America/chicago`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const time = await res.json();

  return Response.json({ time });
}
