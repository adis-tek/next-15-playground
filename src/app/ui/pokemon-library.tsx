"use client";

import Image from "next/image";
import Link from "next/link";

type Pokemon = {
  count: number;
  next: string;
  previous: null;
  results: {
    name: string;
    url: string;
  }[];
};

// pokemon.url.match(/[^\/]+$/)?.[0] || "1"

// pokemon.url.match(\d+) || "1"

//  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.match(
//   /\d+/
// )}.png`}

export default function PokemonLibrary(params: Pokemon) {
  return (
    <div>
      <h1>Pokemon Library</h1>
      <div>
        {params.results?.map(
          (pokemon: { name: string; url: string }, index) => (
            <Link href={`/pokemon/${index + 1}`} key={pokemon.name}>
              <div key={pokemon.name}>
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + 1
                  }.png`}
                  alt={pokemon.name}
                  width={96}
                  height={96}
                />
                <p>{pokemon.name}</p>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
