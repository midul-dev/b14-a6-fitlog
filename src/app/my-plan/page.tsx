"use client";

import { Dispatch, SetStateAction, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FitDataContext } from "@/context/FitDataContext";
import { IData } from "@/types/dataType";
import WorkoutRow from "../copmponents/WorkoutRow";



const MyPlanPage = () => {
  const {savedPlan, todaysPlan } =useContext(FitDataContext) as {
    savedPlan:IData[],
    todaysPlan:IData[]
  }
  const [activeTab, setActiveTab] = useState<"todaysPlan" | "savedPlan">("todaysPlan");

  

  // কোন tab-এর data দেখাবো
  const currentWorkouts =
    activeTab === "todaysPlan" ? todaysPlan: savedPlan ;

  // Dynamic summary
  const totalExercises = currentWorkouts.length;

  const totalMinutes = currentWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = currentWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <main className="min-h-screen bg-[#0B0C0E] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <section>
          <h1 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
            My Plan
          </h1>

          <p className="mt-1 text-[9px] text-[#7D838D] sm:text-[10px]">
            {activeTab === "todaysPlan"
              ? "Cap of five lifts for today. Finish them, then load more."
              : "Your saved workouts. Keep your favorites close."}
          </p>
        </section>

        {/* ================= SUMMARY ================= */}
        <section className="mt-5 grid grid-cols-3 overflow-hidden rounded-xl border border-[#272B31] bg-[#15171C]">

          {/* Exercises */}
          <div className="relative px-3 py-4 sm:px-5 sm:py-5">
            <div className="absolute right-0 top-1/2 h-8 w-px -translate-y-1/2 bg-[#272B31]" />

            <p className="text-[7px] uppercase tracking-wide text-[#646A73]">
              Exercises
            </p>

            <p className="mt-1 text-xl font-black text-[#C2F800]">
              {totalExercises}
            </p>
          </div>

          {/* Minutes */}
          <div className="relative px-3 py-4 sm:px-5 sm:py-5">
            <div className="absolute right-0 top-1/2 h-8 w-px -translate-y-1/2 bg-[#272B31]" />

            <p className="text-[7px] uppercase tracking-wide text-[#646A73]">
              Minutes
            </p>

            <p className="mt-1 text-xl font-black text-white">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="px-3 py-4 sm:px-5 sm:py-5">
            <p className="text-[7px] uppercase tracking-wide text-[#646A73]">
              Calories
            </p>

            <p className="mt-1 text-xl font-black text-white">
              {totalCalories}
            </p>
          </div>

        </section>

        {/* ================= FILTER BAR ================= */}
        <section className="mt-4 flex items-center justify-between">

          {/* Tabs */}
          <div className="flex rounded-md border border-[#272B31] bg-[#15171C] p-0.5">

            {/* Today's Plan */}
            <button
              onClick={() => setActiveTab("todaysPlan")}
              className={`rounded-[4px] px-3 py-1.5 text-[7px] font-bold transition ${
                activeTab === "todaysPlan"
                  ? "bg-[#252A31] text-white"
                  : "text-[#646A73] hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            {/* Saved */}
            <button
              onClick={() => setActiveTab("savedPlan")}
              className={`rounded-[4px] px-3 py-1.5 text-[7px] font-bold transition ${
                activeTab === "savedPlan"
                  ? "bg-[#252A31] text-white"
                  : "text-[#646A73] hover:text-white"
              }`}
            >
              Saved
            </button>

          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-[7px] text-[#646A73]">
              Sort By
            </span>

            <select className="rounded-md border border-[#272B31] bg-[#15171C] px-2 py-1.5 text-[7px] text-gray-300 outline-none">
              <option>Duration ↓</option>
              <option>Duration ↑</option>
              <option>Calories ↓</option>
              <option>Rating ↓</option>
            </select>
          </div>

        </section>

        {/* ================= WORKOUT LIST ================= */}
        <section className="mt-3 space-y-2">

          {currentWorkouts.length > 0 ? (
            currentWorkouts.map((workout) => (
              <WorkoutRow
                key={workout.id}
                workout={workout}
                activeTab={activeTab}
              />
            ))
          ) : (
            <div className="rounded-xl border border-[#272B31] bg-[#15171C] py-10 text-center">
              <h1 className=" font-bold">NOTHING HERE YET</h1>
              <p className="text-[8px] text-[#646A73] pb-3">
                Browse the library and add a lift to get today moving..
              </p>
              <button className="px-5 rounded-2xl py-1.5 bg-[#C2F10D] text-[10px] text-black"><Link href={'/'}>
              Go to workouts</Link></button>
            </div>
          )}

        </section>

      </div>
    </main>
  );
};

export default MyPlanPage;


/* ================================================= */
/* WORKOUT ROW */
/* ================================================= */

