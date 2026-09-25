'use client'
import { FitDataContext } from '@/context/FitDataContext';
import { IData } from '@/types/dataType';
import React, { Dispatch, SetStateAction, useContext } from 'react';

const SavedPlanButton = ({workout} : {workout:IData}) => {
    const {savedPlan, setSavedPlan} = useContext(
      FitDataContext)  as {
        savedPlan: IData[];
        setSavedPlan: Dispatch<SetStateAction<IData[]>>;
      }
    
      // Check whether this workout is already in today's plan
  const isAdded = savedPlan.some(
    (item) => item.id === workout.id
  );
    
        const handleSavedPlan = ()=>{
          setSavedPlan( [...savedPlan, workout])
          
        }
    return (
        <button
        onClick={handleSavedPlan}
                className="
                  rounded-md
                  border
                  border-[#30343A]
                  bg-[#111318]
                  px-3
                  py-2
                  text-[8px]
                  font-medium
                  text-gray-300
                  transition
                  hover:border-[#454A52]
                  hover:text-white
                "
              >
                ♡ Save for later
              </button>
    );
};

export default SavedPlanButton;