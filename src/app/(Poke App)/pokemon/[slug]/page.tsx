import PokemonPage from "../../../ui/pokemon-page";

interface PokemonPageProps {
  pokemonData: {
    name: string;
    id: number;
    types: string[];
  };
  evolutions: {
    name: string;
    url: string;
    trigger: string;
  }[];
}

export default async function PokemonSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const getPokemonData = await fetch("http://localhost:3000/api/pokemon", {
    method: "GET",
    headers: {
      "Content-Type": "Application/JSON",
    },
  });

  const data: PokemonPageProps = await getPokemonData.json();

  console.log(data);

  // const pokemonData = {
  //   slug: slug,
  //   evolutions: [
  //     {
  //       name: "ivysaur",
  //       url: "https://pokeapi.co/api/v2/pokemon-species/2/",
  //       trigger: "level-up",
  //     },
  //     {
  //       name: "venusaur",
  //       url: "https://pokeapi.co/api/v2/pokemon-species/3/",
  //       trigger: "level-up",
  //     },
  //   ],
  //   pokemonData: {
  //     name: "bulbasaur",
  //     id: 1,
  //     types: ["grass", "poison"],
  //   },
  // };

  return (
    <div>
      <h1>{slug}</h1>
      <p>Info 1 on {slug}</p>
      <PokemonPage props={data} />
    </div>
  );
}
