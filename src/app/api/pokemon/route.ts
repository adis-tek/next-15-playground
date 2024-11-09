import { NextRequest, NextResponse } from "next/server";

// export const dynamic = "force-static";

export async function GET(request: NextRequest) {
  // match ids => .match(/(?<=\/)\d+/);
  const pokemonId = 1;

  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
  );

  const pokemonEvolutionChain = await fetch(
    `https://pokeapi.co/api/v2/evolution-chain/${pokemonId}/`
  );

  const pokemonData = {
    data: (await pokemon.json()) || null,
    evolutionChain: (await pokemonEvolutionChain.json()) || null,
    // evolutionTrigger: (await pokemonEvolutionTrigger.json()) || null,
  };

  const evolves = () => {
    type EvolutionDetails = {
      trigger: {
        name: string;
        url: string;
      };
    };

    type EvolveData = {
      evolution_details: EvolutionDetails[];
      evolves_to: EvolveData[];
      isBaby: boolean;
      species: {
        name: string;
        url: string;
      };
    };

    type Evolutions = {
      evolves_to: EvolveData[];
    };

    const evolutions: Evolutions | [] = [];

    const test: any = [];

    const getEvolutions = async () => {
      let num = 0;

      const urlChain = [
        pokemonData.evolutionChain.chain.evolves_to[0]
          ? pokemonData.evolutionChain.chain.evolves_to[0]
          : null,
        pokemonData.evolutionChain.chain.evolves_to[0].evolves_to[0]
          ? pokemonData.evolutionChain.chain.evolves_to[0].evolves_to[0]
          : null,
      ];

      function pushData() {
        test.push({
          name: urlChain[num].species.name,
          url: urlChain[num].species.url,
          trigger: urlChain[num].evolution_details[0].trigger.name,
        });
      }

      function recurse() {
        if (urlChain[num]?.species?.name) {
          pushData();
          num++;
          recurse();
        } else {
          return;
        }
      }

      recurse();

      return test;
    };

    getEvolutions();

    return test;
  };

  const pokemonObject = {
    name: pokemonData.data.name,
    id: pokemonData.data.id,
    types: pokemonData.data.types.map(
      (type: { type: { name: string } }) => type.type.name
    ),
  };

  return NextResponse.json({
    evolves: evolves(),
    pokemonData: pokemonObject,
    // request: request,
  });
}
