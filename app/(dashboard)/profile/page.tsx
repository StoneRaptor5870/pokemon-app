import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";
import prisma from "@/prisma/db";
import { Card } from "@/components/ui/card";

const userData = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  const userDataAndPokemon = await prisma.user.findFirst({
    where: {
      id: session?.user?.id,
    },
    include: { firstPokemon: true },
  });
  return userDataAndPokemon;
};

export default async function Profile() {
  const userDataAndPokemon = await userData();
  if (!userDataAndPokemon) {
    return <div>No user data found</div>;
  }

  const { name, email, firstPokemon } = userDataAndPokemon;

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Card title="First Pokémon">
        <div className="flex flex-col justify-center items-center shadow-md p-4">
          <p>
            Name: {firstPokemon?.pokemonName}
          </p>
          <p>
            Id: {firstPokemon?.pokemonId}
          </p>
          {firstPokemon?.pokemonImage ? (
            <img
              src={firstPokemon?.pokemonImage}
              alt={firstPokemon?.pokemonName}
              className="w-32 h-32"
            />
          ) : (
            <p>No image available</p>
          )}
        </div>
      </Card>
    </div>
  )

  // return (
  //   <div className="p-4 bg-white">
  //     <h1 className="text-2xl font-bold">User Profile</h1>
  //     <div className="mt-4">
  //       <p>
  //         <strong>Name:</strong> {name}
  //       </p>
  //       <p>
  //         <strong>Email:</strong> {email}
  //       </p>
  //       <h2 className="mt-4 text-xl font-semibold">First Pokémon</h2>
  //       {firstPokemon ? (
  //         <div className="mt-2">
  //           <p>
  //             <strong>Name:</strong> {firstPokemon.pokemonName}
  //           </p>
  //           <p>
  //             <strong>Id:</strong> {firstPokemon.pokemonId}
  //           </p>
  //           <img
  //             src={firstPokemon.pokemonImage ?? ''}
  //             alt={firstPokemon.pokemonName}
  //             className="w-32 h-32"
  //           />
  //         </div>
  //       ) : (
  //         <p>No Pokémon found</p>
  //       )}
  //     </div>
  //   </div>
  // );
}