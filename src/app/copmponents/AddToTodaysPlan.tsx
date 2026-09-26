"use client";

import { FitDataContext } from "@/context/FitDataContext";
import { IData } from "@/types/dataType";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { Bounce, toast } from "react-toastify";

const AddToTodaysPlan = ({ workout }: { workout: IData }) => {
  const { todaysPlan, setTodaysPlan } = useContext(FitDataContext) as {
    todaysPlan: IData[];
    setTodaysPlan: Dispatch<SetStateAction<IData[]>>;
  };

  // Check whether this workout is already in today's plan
  const isAdded = todaysPlan.some(
    (item) => item.id === workout.id
  );

   const isPlanFull = todaysPlan.length >= 5;

  const handleTodaysPlan = () => {
    if (isAdded || isPlanFull) return;

    setTodaysPlan([...todaysPlan, workout]);
    toast.success(`${workout.name} added to Today's Plan.`, {
position: "top-right",
autoClose: 3000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
  };

  return (
    <button
      onClick={handleTodaysPlan}
      disabled={isAdded}
      className={`
        rounded-md
        px-3
        py-2
        text-[8px]
        font-bold
        uppercase
        tracking-wide
        transition
        ${
          isAdded || isPlanFull
            ? "cursor-not-allowed bg-[#252A31] text-[#646A73]"
            : "bg-[#C2F800] text-black hover:bg-[#8eaa34]"
        }
      `}
    >
      {isAdded ? "✓ Plan Added" : isPlanFull ? "Plan Full (5/5)" : "✓ Add to today's plan"}
    </button>
  );
};

export default AddToTodaysPlan;