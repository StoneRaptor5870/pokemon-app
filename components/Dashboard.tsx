"use client";

import { Card } from "./ui/card";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Card title="Home">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full p-4">
            <p className="text-xl">User Profile</p>
            <div>
              This feature lets you see your favoutrite pokemons that the user has saved for them.
            </div>
          </div>
          <div className="w-full p-4">
            <p className="text-xl">Search Pokemons</p>
            <div>
              This feature lets search pokemons on the basis of name, region, types etc.
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
};

export default Dashboard;
