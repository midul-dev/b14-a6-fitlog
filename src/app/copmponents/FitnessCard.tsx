import { IData } from "@/types/dataType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FitnessCard = ({ data } : {data:IData}) => {
  return (
    <Link
      href={`/exercise/${data.id}`}
      className="group block"
    >
    <div id="cards" className=" group
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
        <div className="mb-5 flex items-center gap-1.5">
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
        <h3 className="text-[15px] mb-3 font-extrabold uppercase leading-4 tracking-wide text-white">
          {data.name}
        </h3>

        {/* Subtitle */}
        <p className="mt-1 text-[12px] font-bold leading-3 text-[#7D828B]">
          {data.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-[#25282D]" />

        {/* Bottom Stats */}
        <div className="flex items-center gap-3 text-[12px] font-bold text-[#8B919A]">

          {/* Duration */}
          <div className="flex items-center gap-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[15px] w-[15px] text-[#C2F800]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="9" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 7v5l3 2"
      />
    </svg>

    <span>{data.duration} min</span>
  </div>

          {/* Calories */}
          <div className="flex items-center gap-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[15px] w-[15px] text-[#C2F800]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.5 2.5c.5 3.5-2.5 4.5-2.5 7.5 0 1.2.7 2.2 1.7 2.8-.1-1.7.8-3.1 2.2-4.3.9 1.4 2.6 2.8 2.6 5.3 0 2.5-1.8 4.7-4.7 4.7-3.1 0-5.3-2.3-5.3-5.5 0-3.8 3-6.2 5-10.5.4-.8.7-1.6 1-2.5Z"
      />
    </svg>

    <span>{data.caloriesBurned} kcal</span>
  </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[15px] w-[15px] text-[#C2F800]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
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