import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";
import Dashboard from "@/components/Dashboard";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const name = session?.user?.name;

  if (!session) {
    redirect("/signin");
  }
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 gap-4 bg-white">
      <div className="mb-4 text-2xl font-bold">Welcome Back, {name}</div>
      <div className="mb-auto">
      <Dashboard/>
      </div>
    </div>
  );
}