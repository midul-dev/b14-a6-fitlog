"use client";

import { useContext, useState } from "react";
import Link from "next/link";

import { FitDataContext } from "@/context/FitDataContext";
import { IData } from "@/types/dataType";
import WorkoutRow from "../copmponents/WorkoutRow";

const MyPlanPage = () => {
  const { savedPlan, todaysPlan } = useContext(FitDataContext) as {
    savedPlan: IData[];
    todaysPlan: IData[];
  };

  // ================= STATE =================

  const [activeTab, setActiveTab] = useState<"todaysPlan" | "savedPlan">(
    "todaysPlan",
  );

  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState<
    "duration" | "calories" | "rating"
  >("duration");

  // ================= CURRENT WORKOUTS =================

  const currentWorkouts =
    activeTab === "todaysPlan" ? todaysPlan : savedPlan;

  // ================= SEARCH / FILTER =================

  const filteredWorkouts = currentWorkouts.filter((workout) => {
    const query = search.toLowerCase().trim();

    // Search empty হলে সব workout দেখাবে
    if (!query) return true;

    // Workout name
    const matchesName = workout.name.toLowerCase().includes(query);

    // Muscle group / tag
    const matchesTag = workout.muscleGroups.some((tag) =>
      tag.toLowerCase().includes(query),
    );

    return matchesName || matchesTag;
  });

  // ================= SORT =================

  const sortedWorkouts = [...filteredWorkouts].sort((a, b) => {
    switch (sortBy) {
      case "duration":
        return b.duration - a.duration;

      case "calories":
        return b.caloriesBurned - a.caloriesBurned;

      case "rating":
        return b.rating - a.rating;

      default:
        return 0;
    }
  });

  // ================= SUMMARY =================

  const totalExercises = currentWorkouts.length;

  const totalMinutes = currentWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = currentWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  // ================= RENDER =================

  return (
    <main className="min-h-screen bg-[#0B0C0E] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}

        <section>
          <h1 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
            My Plan
          </h1>

          <p className="mt-1 text-[9px] text-[#7D838D] sm:text-[12px]">
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

            <p className="text-[10px] uppercase tracking-wide text-[#646A73]">
              Exercises
            </p>

            <p className="mt-1 text-xl font-black text-[#C2F800]">
              {totalExercises}
            </p>
          </div>

          {/* Minutes */}

          <div className="relative px-3 py-4 sm:px-5 sm:py-5">
            <div className="absolute right-0 top-1/2 h-8 w-px -translate-y-1/2 bg-[#272B31]" />

            <p className="text-[10px] uppercase tracking-wide text-[#646A73]">
              Minutes
            </p>

            <p className="mt-1 text-xl font-black text-white">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}

          <div className="px-3 py-4 sm:px-5 sm:py-5">
            <p className="text-[10px] uppercase tracking-wide text-[#646A73]">
              Calories
            </p>

            <p className="mt-1 text-xl font-black text-white">
              {totalCalories}
            </p>
          </div>
        </section>

        {/* ================= FILTER BAR ================= */}

        <section className="mt-4">
          {/* ================= TOP ROW ================= */}

          <div className="flex items-center justify-between gap-2">
            {/* ================= TABS ================= */}

            <div className="flex shrink-0 rounded-md border border-[#272B31] bg-[#15171C] p-0.5">
              {/* Today's Plan */}

              <button
                onClick={() => {
                  setActiveTab("todaysPlan");
                  setSearch("");
                }}
                className={`rounded-[4px] px-3 py-1.5 text-[9px] font-bold transition sm:text-[12px] ${
                  activeTab === "todaysPlan"
                    ? "bg-[#252A31] text-[#C2F800]"
                    : "text-[#646A73] hover:text-white"
                }`}
              >
                Today&apos;s Plan
              </button>

              {/* Saved */}

              <button
                onClick={() => {
                  setActiveTab("savedPlan");
                  setSearch("");
                }}
                className={`rounded-[4px] px-3 py-1.5 text-[9px] font-bold transition sm:text-[12px] ${
                  activeTab === "savedPlan"
                    ? "bg-[#252A31] text-[#C2F800]"
                    : "text-[#646A73] hover:text-white"
                }`}
              >
                Saved
              </button>
            </div>

            {/* ================= DESKTOP SEARCH ================= */}

            <div className="hidden flex-1 justify-center px-4 sm:flex">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search workouts..."
                className="w-full max-w-xs rounded-md border border-[#272B31] bg-[#15171C] px-3 py-2 text-[9px] text-gray-300 outline-none placeholder:text-[#646A73] transition focus:border-[#C2F800]"
              />
            </div>

            {/* ================= SORT ================= */}

            <div className="flex shrink-0 items-center gap-2">
              <span className="hidden text-[10px] text-[#646A73] sm:block">
                Sort By
              </span>

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as
                      | "duration"
                      | "calories"
                      | "rating",
                  )
                }
                className="cursor-pointer rounded-md border border-[#272B31] bg-[#15171C] px-2 py-1.5 text-[9px] text-gray-300 outline-none transition hover:border-[#454A52] sm:text-[10px]"
              >
                <option value="duration">Duration ↓</option>
                <option value="calories">Calories ↓</option>
                <option value="rating">Rating ↓</option>
              </select>
            </div>
          </div>

          {/* ================= MOBILE SEARCH ================= */}

          <div className="mt-2 flex justify-center sm:hidden">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search workouts..."
              className="w-full rounded-md border border-[#272B31] bg-[#15171C] px-3 py-2 text-[9px] text-gray-300 outline-none placeholder:text-[#646A73] transition focus:border-[#C2F800]"
            />
          </div>
        </section>

        {/* ================= SEARCH RESULT INFO ================= */}

        {search.trim() && (
          <p className="mt-3 text-[8px] text-[#646A73]">
            Showing {sortedWorkouts.length} result
            {sortedWorkouts.length !== 1 ? "s" : ""} for{" "}
            <span className="text-[#C2F800]">
              &quot;{search}&quot;
            </span>
          </p>
        )}

        {/* ================= WORKOUT LIST ================= */}

        <section className="mt-3 space-y-2">
          {sortedWorkouts.length > 0 ? (
            sortedWorkouts.map((workout) => (
              <WorkoutRow
                key={workout.id}
                workout={workout}
                activeTab={activeTab}
              />
            ))
          ) : search.trim() ? (
            /* ================= NO SEARCH RESULT ================= */

            <div className="rounded-xl border border-[#272B31] bg-[#15171C] py-10 text-center">
              <h1 className="font-bold text-white">
                NO WORKOUTS FOUND
              </h1>

              <p className="mt-1 text-[10px] text-[#646A73]">
                No workout matches &quot;{search}&quot;.
              </p>

              <button
                onClick={() => setSearch("")}
                className="mt-3 rounded-2xl bg-[#C2F10D] px-5 py-1.5 text-[10px] text-black transition hover:bg-[#9fca00]"
              >
                Clear Search
              </button>
            </div>
          ) : (
            /* ================= EMPTY PLAN ================= */

            <div className="rounded-xl border border-[#272B31] bg-[#15171C] py-10 text-center">
              <h1 className="font-bold text-white">
                NOTHING HERE YET
              </h1>

              <p className="pb-3 text-[10px] text-[#646A73]">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="inline-block rounded-2xl bg-[#C2F10D] px-5 py-1.5 text-[10px] font-bold text-black transition hover:bg-[#9fca00]"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default MyPlanPage;