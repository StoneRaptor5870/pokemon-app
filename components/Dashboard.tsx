"use client";

import { Card } from "./ui/card";

interface PokemonData {
  id: string;
  pokemonId: number;
  pokemonName: string;
  pokemonImage: string | null;
  userId: string;
}

const Dashboard: React.FC<{ pokemonData: PokemonData }> = ({ pokemonData }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex flex-col justify-center items-center m-auto mt-64">
        {pokemonData.pokemonImage ? (
          <img
            src={pokemonData.pokemonImage}
            alt={pokemonData.pokemonName}
            className="w-64 h-64 m-auto"
          />
        ) : (
          <p>No image available</p>
        )}
      </div>
    </div>
  );
};

// const Dashboard = async ({
//   pokemonData,
// }: {
//   pokemonData: {
//     id: string;
//     pokemonId: number;
//     pokemonName: string;
//     pokemonImage: string | null;
//     userId: string;
//   }
// }) => {
//   return (
//     <div className="flex flex-col justify-center items-center w-full h-full">
//       {/* <Card title="Home">
//         <div className="flex flex-col justify-center items-center">
//           <div className="w-full p-4">
//             <p className="text-xl">User Profile</p>
//             <div>
//               This feature lets you see your favoutrite pokemons that the user has saved for them.
//             </div>
//           </div>
//           <div className="w-full p-4">
//             <p className="text-xl">Search Pokemons</p>
//             <div>
//               This feature lets search pokemons on the basis of name, region, types etc.
//             </div>
//           </div>
//         </div>
//       </Card> */}
//     </div>
//   );
// };

export default Dashboard;
