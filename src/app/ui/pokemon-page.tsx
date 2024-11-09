"use client";

interface PokemonPageProps {
  slug: string;
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
      <h1>{props.slug.toUpperCase()}</h1>
      <p>Item details.</p>
    </div>
  );
}
