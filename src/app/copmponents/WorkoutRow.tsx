import { FitDataContext } from "@/context/FitDataContext";
import { IData } from "@/types/dataType";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { Bounce, toast } from "react-toastify";

const WorkoutRow = ({
  workout,
  activeTab,
}: {
  workout: IData;
  activeTab: "todaysPlan" | "savedPlan";
}) => {
  const { todaysPlan, setTodaysPlan, savedPlan, setSavedPlan } = useContext(
    FitDataContext,
  ) as {
    savedPlan: IData[];
    setSavedPlan: Dispatch<SetStateAction<IData[]>>;
    todaysPlan: IData[];
    setTodaysPlan: Dispatch<SetStateAction<IData[]>>;
  };
  const handleRemovePlan = () => {
    setTodaysPlan(todaysPlan.filter((item) => item.id !== workout.id));
    toast.error(`${workout.name} removed from Today's Plan.`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const handleRemoveSaved = () => {
    setSavedPlan(savedPlan.filter((item) => item.id !== workout.id));
    toast.error(`${workout.name} removed from saved.`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const handleAddToPlan = () => {
    const alreadyAdded = todaysPlan.some((item) => item.id === workout.id);

    if (alreadyAdded) {
      toast.warn("Already added to today's plan!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    setTodaysPlan([...todaysPlan, workout]);
    toast.success(`${workout.name} added to Today's Plan successfully`, {
position: "top-right",
autoClose: 3000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});

    setSavedPlan(savedPlan.filter((item) => item.id !== workout.id));
  };
  return (
    <div className="flex items-center gap-3 rounded-xl border border-[#272B31] bg-[#15171C] p-2 transition hover:border-[#343941] sm:gap-4 sm:p-2.5">
      {/* Image */}
      <div className="relative h-12 w-20 shrink-0 overflow-hidden rounded-md sm:h-14 sm:w-24">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Workout Info */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[9px] font-black uppercase text-white sm:text-[10px]">
          {workout.name}
        </h3>

        <p className="mt-0.5 text-[7px] text-[#7D838D]">
          {workout.caloriesBurned}
        </p>

        {/* Stats */}
        <div className="mt-1 flex items-center gap-2 text-[6px] text-[#7D838D] sm:text-[7px]">
          <span>
            <span className="text-[#C2F800]">◷</span> {workout.duration} min
          </span>

          <span>
            <span className="text-[#C2F800]">◉</span> {workout.caloriesBurned}{" "}
            kcal
          </span>

          <span>
            <span className="text-[#C2F800]">★</span> {workout.rating}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-1.5">
        <Link
          href={`/${workout.id}`}
          className="hidden rounded-md border border-[#30343A] px-2.5 py-1.5 text-[6px] font-medium text-gray-300 transition hover:border-[#454A52] hover:text-white sm:block"
        >
          View Details
        </Link>

        {/* Today's Plan → Mark as Done */}
        {activeTab === "todaysPlan" && (
          <button className="rounded-full bg-[#C2F800] px-2.5 py-1.5 text-[6px] font-bold text-black transition hover:bg-[#b1e600] sm:rounded-md">
            <span className="sm:hidden">✓</span>

            <span className="hidden sm:inline">✓ Mark as Done</span>
          </button>
        )}

        {/* Saved → Add to Plan */}
        {activeTab === "savedPlan" && (
          <button
            onClick={handleAddToPlan}
            className="rounded-md bg-[#C2F800] px-2.5 py-1.5 text-[6px] font-bold text-black transition hover:bg-[#b1e600]"
          >
            + Add to Plan
          </button>
        )}

        <button
          onClick={
            activeTab === "todaysPlan" ? handleRemovePlan : handleRemoveSaved
          }
          className="px-1 text-[9px] text-[#646A73] transition hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default WorkoutRow;
