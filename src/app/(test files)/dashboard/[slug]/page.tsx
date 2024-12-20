import PokemonPage from "../../../ui/pokemon-page";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  console.log(slug);

  return (
    <div>
      <h1>The slug: {slug}</h1>
      <p>Item details.</p>
      <PokemonPage slug={slug} />
    </div>
  );
}
