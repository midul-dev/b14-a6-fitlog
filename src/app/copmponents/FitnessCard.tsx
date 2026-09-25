import { IData } from "@/types/dataType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FitnessCard = ({ data } : {data:IData}) => {
  return (
    <Link
      href={`/${data.id}`}
      className="group block"
    >
    <div className=" group
        overflow-hidden
        rounded-2xl
        border
        border-[#272B31]
        bg-[#15171C]
        shadow-[0_8px_30px_rgba(0,0,0,0.18)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#3A3F46]
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
      
      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Card Content */}
      <div className="px-3.5 pb-3.5 pt-3">

        {/* Tags */}
        <div className="mb-2.5 flex items-center gap-1.5">
          {data.muscleGroups.map((muscleGroup : string, indx : number) => (
            <span
              key={indx}
              className="rounded-full bg-[#C2F800] px-2 py-[3px] text-[7px] font-extrabold uppercase leading-none text-black"
            >
              {muscleGroup}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-[12px] font-extrabold uppercase leading-4 tracking-wide text-white">
          {data.name}
        </h3>

        {/* Subtitle */}
        <p className="mt-1 text-[9px] leading-3 text-[#7D828B]">
          {data.equipment}
        </p>

        {/* Divider */}
        <div className="my-3 border-t border-[#25282D]" />

        {/* Bottom Stats */}
        <div className="flex items-center gap-3 text-[8px] text-[#8B919A]">

          {/* Duration */}
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[10px] w-[10px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="9" />
              <path
                strokeLinecap="round"
                d="M12 7v5l3 2"
              />
            </svg>

            <span>{data.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[9px] w-[9px]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <circle cx="12" cy="12" r="5" />
            </svg>

            <span>{data.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[10px] w-[10px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"
              />
            </svg>

            <span>{data.rating}</span>
          </div>

        </div>
      </div>
    </div>
    </Link>
  );
};

export default FitnessCard;