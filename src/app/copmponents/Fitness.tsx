import getFitnessData from "@/lib/fitnessData";
import { IData } from "@/types/dataType";
import React from "react";
import FitnessCard from "./FitnessCard";


const Fitness = async () => {
  const allData = await getFitnessData();

  return (
    <section className="bg-[#0B0C0E] px-4 py-8 sm:px-6 lg:px-15">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
            THE LIBRARY
          </h2>

          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allData.map((data: IData) => (
            <FitnessCard key={data.id} data={data} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Fitness;