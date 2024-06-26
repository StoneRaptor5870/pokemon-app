import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "./lib/auth";
import prisma from "../prisma/db";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  try {
    const userId = session.user.id;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { firstPokemon: true },
    });

    if (user && user.firstPokemon) {
      redirect("/dashboard"); // Redirect to dashboard if user has firstPokemon
    } else {
      redirect("/landing"); // Redirect to landing if user does not have firstPokemon
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    redirect("/landing"); // Handle error case, redirect to landing as fallback
  }
}
