"use client";

import Image from "next/image";

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

export default function PokemonPage({ props }: { props: PokemonPageProps }) {
  return (
    <div>
      <Image
        width={96}
        height={96}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonData.id}.png`}
        alt={props.pokemonData.name}
      />
      <h2>{props.pokemonData.name.toUpperCase()}</h2>
      <p>Item details.</p>
      <ul>
        {props.pokemonData.types.map((type: string, index: number) => {
          return <li key={index}>{type}</li>;
        })}
      </ul>
      <h2>Evolutions</h2>
      <div>
        {props.evolutions.map(
          (
            evolution: { name: string; url: string; trigger: string },
            index: number
          ) => {
            return (
              <div key={index}>
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.url.match(
                    /(?<=\/)\d+/
                  )}.png`}
                  alt={evolution.name}
                  width={96}
                  height={96}
                />
                <p>{evolution.name}</p>
                <p>{evolution.trigger}</p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
