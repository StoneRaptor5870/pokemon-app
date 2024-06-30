"use client";

import { useState } from "react";
import { TextInput } from "./ui/textinput";
import { pokemonSearch } from "@/app/lib/actions/selectFirstPokemon";
import useDebounce from "@/hooks/useDebounce";

export default function SearchPokemon() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState<any>(null);
  const debouncedPokemon = useDebounce(pokemon, 300);

  const handleSearch = async () => {
    const data = await pokemonSearch(debouncedPokemon);
    setPokemonData(data);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-8">
      <div className="flex gap-4">
        <TextInput
          placeholder="Enter name for a pokemon"
          label="Pokemon Search"
          onChange={(e: any) => {
            setPokemon(e);
          }}
        />
        <div className="mt-8">
          <button
            onClick={handleSearch}
            type="button"
            className="text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 me-4 mt-1"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        {pokemonData ? (
          <div className="flex flex-col items-center">
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} className="w-32 h-32" />
            <h2 className="text-xl font-bold">{pokemonData.name}</h2>
            <p>Height: {pokemonData.height}</p>
            <p>Weight: {pokemonData.weight}</p>
            <p>Type: {pokemonData.types.map((type: any) => type.type.name).join(", ")}</p>
          </div>
        ) : (
          <p>No Pokémon data to display</p>
        )}
      </div>
    </div>
  );
}
