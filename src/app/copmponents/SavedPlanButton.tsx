"use client";

import { FitDataContext } from "@/context/FitDataContext";
import { IData } from "@/types/dataType";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { Bounce, toast } from "react-toastify";

const SavedPlanButton = ({ workout }: { workout: IData }) => {
  const { savedPlan, setSavedPlan } = useContext(FitDataContext) as {
    savedPlan: IData[];
    setSavedPlan: Dispatch<SetStateAction<IData[]>>;
  };

  // Check if workout is already saved
  const isSaved = savedPlan.some(
    (item) => item.id === workout.id
  );

  const handleSavedPlan = () => {
    if (isSaved) return;

    setSavedPlan([...savedPlan, workout]);
    toast.success(`${workout.name} saved successfully`, {
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

  return (
    <button
      onClick={handleSavedPlan}
      disabled={isSaved}
      className={`
        rounded-md
        border
        px-3
        py-2
        text-[8px]
        font-medium
        transition
        ${
          isSaved
            ? "cursor-not-allowed border-[#30343A] bg-[#252A31] text-[#646A73]"
            : "border-[#30343A] bg-[#111318] text-gray-300 hover:border-[#454A52] hover:bg-[#252A31] hover:text-white"
        }
      `}
    >
      {isSaved ? "♡ Saved" : "♡ Save for later"}
    </button>
  );
};

export default SavedPlanButton;