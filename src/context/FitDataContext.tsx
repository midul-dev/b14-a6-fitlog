"use client";

import { IData } from "@/types/dataType";

import { createContext, ReactNode, useState } from "react";



export const FitDataContext = createContext({});

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [savedPlan, setSavedPlan] = useState<IData[]>([])
  const [todaysPlan, setTodaysPlan] = useState<IData[]>([])

  const sharedData = { savedPlan, setSavedPlan, todaysPlan, setTodaysPlan };

  return (
    <FitDataContext.Provider value={sharedData}>{children}</FitDataContext.Provider>
  );
};

export default DataProvider;