import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import prisma from "../../prisma/db";
import { redirect } from "next/navigation";
import Landing from "@/components/Landing";

export default async function LandingPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  const pokemonIds = [1, 4, 7];

  // Generate image URLs based on the IDs
  const pokemonData = pokemonIds.map((id) => {
    return {
      id,
      name: ["Bulbasaur", "Charmander", "Squirtle"][pokemonIds.indexOf(id)],
      imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(id).padStart(3, '0')}.png`
    };
  });

  return (
    <div className="flex flex-col items-center justify-between w-full h-screen bg-[url('./../public/Nature.jpg')] bg-cover bg-center bg-no-repeat">
      {/* <div className="w-full flex justify-center py-4 bg-white">
        <div className="text-2xl font-bold text-black">
          Welcome Back, {name}
        </div>
      </div> */}
      <div className="flex flex-grow flex-row justify-center items-center gap-12 text-black">
      {pokemonData.map((pokemon) => (
          <div key={pokemon.id} className="flex flex-col items-center mt-20">
            <img src={pokemon.imageUrl} alt={pokemon.name} className="w-full h-full"/>
            {/* <div>{pokemon.name}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
