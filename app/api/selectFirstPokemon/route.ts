import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../lib/auth";
import prisma from "../../../prisma/db";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const userId = session.user?.id;
  const { id, name } = await req.json();

  if (!userId || !id || !name) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const firstPokemon = await prisma.firstPokemon.create({
      data: {
        userId,
        pokemonId: id,
        pokemonName: name,
      },
    });
    return NextResponse.json({ success: true, firstPokemon }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
