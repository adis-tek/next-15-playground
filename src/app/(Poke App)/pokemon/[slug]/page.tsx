import PokemonPage from "../../../ui/pokemon-page";

export default async function PokemonSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  // const pokemonData = await fetch("/api/pokemon", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "Application/JSON",
  //   },
  // });

  const pokemonData = {
    slug: slug,
    evolutions: [
      {
        name: "ivysaur",
        url: "https://pokeapi.co/api/v2/pokemon-species/2/",
        trigger: "level-up",
      },
      {
        name: "venusaur",
        url: "https://pokeapi.co/api/v2/pokemon-species/3/",
        trigger: "level-up",
      },
    ],
    pokemonData: {
      name: "bulbasaur",
      id: 1,
      types: ["grass", "poison"],
    },
  };

  return (
    <div>
      <h1>{slug}</h1>
      <p>Info 1 on {slug}</p>
      <PokemonPage props={pokemonData} />
    </div>
  );
}
