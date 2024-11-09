"use client";

interface PokemonPageProps {
  slug: string;
}

interface Pokemon {
  data: {
    species: {
      name: string;
    };
  };
}

interface Time {
  abbreviation: string;
  datetime: string;
}

import { useEffect, useState } from "react";

export default function PokemonPage({ slug }: PokemonPageProps) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [time, setTime] = useState<Time | null>(null);

  useEffect(() => {
    async function fetchData() {
      const pokemonResponse = await fetch("/api/pokemon", {
        method: "GET",
        headers: {
          "Content-Type": "Application/JSON",
        },
      });
      const timeResponse = await fetch("/api/time", {
        method: "GET",
        headers: {
          "Content-Type": "Application/JSON",
        },
      });

      const pokemonData = await pokemonResponse.json();
      const timeData = await timeResponse.json();

      setPokemon(pokemonData);
      setTime(timeData);
    }

    fetchData();
  }, [slug]);

  console.log(slug);
  console.log(pokemon);
  console.log(time);

  return (
    <div>
      <h1>{slug.toUpperCase()}</h1>
      <p>Item details.</p>
      {time && time.datetime && time.abbreviation && (
        <p>
          {time
            ? JSON.stringify(time.datetime + time.abbreviation)
            : "Loading..."}
        </p>
      )}

      <p>
        {time?.datetime} {time?.abbreviation}
      </p>

      {/* {pokemon && pokemon.data.species.name && (
        <p>
          {pokemon && pokemon.data.species.name
            ? JSON.stringify(pokemon.data.species.name)
            : "Loading..."}
        </p>
      )} */}
      {/* <p>{JSON.stringify(pokemon)}</p> */}
    </div>
  );
}
