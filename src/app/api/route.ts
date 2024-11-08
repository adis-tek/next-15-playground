import { NextRequest } from "next/server";

export const dynamic = "force-static";

export async function GET(request: NextRequest) {
  const pokemonId = request.pokemonId;
  const res = await fetch(
    `https://pokeapi.co/api/v2/generation/${pokemonId}/`,
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
