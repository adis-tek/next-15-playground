export const dynamic = "force-static";

export async function GET() {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const pokemon = await res.json();

  return Response.json({ pokemon });
}
