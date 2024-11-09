import PokemonPage from "../../../ui/pokemon-page";

export default async function PokemonSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <div>
      <h1>{slug}</h1>
      <p>Info 1 on {slug}</p>
      <PokemonPage slug={slug} />
    </div>
  );
}
