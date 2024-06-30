"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import api from "@/app/api/pokemon";
import prisma from "@/prisma/db";

export const pokemonSearch = async (pokemonName: string) => {
  try {
    const response = await api.get(`/pokemon/${pokemonName.toLowerCase()}`);
    const pokemonData = response.data;
    return pokemonData;
  } catch (error) {
    console.log('Error fetching Pokémon data:', error);
  }
};