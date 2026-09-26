import Image from "next/image";
import Link from "next/link";
import { IData } from "@/types/dataType";
import AddToTodaysPlan from "../../copmponents/AddToTodaysPlan";
import SavedPlanButton from "../../copmponents/SavedPlanButton";
import { notFound } from "next/navigation";

const WorkoutDetails = async ({
  params,
}: {
  params: Promise<{ fitnessId: string }>;
}) => {
  const { fitnessId } = await params;

  const response = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${fitnessId}`,
  );

  if (!response.ok) {
  notFound();
}

  const workout:IData = await response.json();

  return (
    <main className="min-h-screen bg-[#0B0C0E] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* ================= BACK ================= */}
        <Link
          href="/"
          className="mb-5 inline-flex items-center gap-2 text-[10px] font-medium text-[#646A73] transition hover:text-white"
        >
          <span className="text-lg">←</span>
          Back to Library
        </Link>

        {/* ================= MAIN 2 COLUMN CARD ================= */}
        <div className="grid overflow-hidden rounded-xl border border-[#272B31] bg-[#15171C] lg:grid-cols-[0.95fr_1fr]">
          {/* ================= LEFT IMAGE ================= */}
          <div className="p-4 sm:p-5 lg:p-6">
            <div className="relative h-[360px] overflow-hidden rounded-lg sm:h-[450px] lg:h-[520px]">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="flex flex-col px-4 pb-5 pt-1 sm:px-5 sm:pb-6 lg:px-5 lg:py-10">
            {/* Title */}
            <div>
              <h1 className="text-2xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-3xl">
                {workout.name}
              </h1>

              <p className="mt-2 max-w-xl text-[10px] leading-4 text-[#7D838D] sm:text-[15px]">
                {workout.description}
              </p>
            </div>

            {/* Muscle Groups */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {workout.muscleGroups.map((muscleGroup :string, index:number) => (
                <span
                  key={index}
                  className="rounded-full bg-[#C2F800] px-2.5 py-1 text-[8px] font-black uppercase leading-none text-black"
                >
                  {muscleGroup}
                </span>
              ))}
            </div>

            {/* ================= INFO TABLE ================= */}
            <div className="mt-4 overflow-hidden rounded-lg border border-[#272B31] bg-[#171A20]">
              {/* Equipment */}
              <DetailRow
                label="Equipment"
                value={workout.equipment}
              />

              {/* Difficulty */}
              <DetailRow
                label="Difficulty"
                value={workout.difficulty}
              />

              {/* Sets */}
              <DetailRow
                label="Sets"
                value={workout.sets}
              />

              {/* Reps */}
              <DetailRow
                label="Reps"
                value={workout.reps}
              />

              {/* Duration */}
              <DetailRow
                label="Duration"
                value={`${workout.duration} min`}
              />

              {/* Calories */}
              <DetailRow
                label="Calories"
                value={`${workout.caloriesBurned} kcal`}
              />

              {/* Rating */}
              <DetailRow
                label="Rating"
                value={workout.rating}
                last
              />
            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-4">
              <h2 className="text-[15px] font-black uppercase tracking-wide text-white">
                Instructions
              </h2>

              <ol className="mt-2 space-y-1.5">
                {workout.instructions.map((instruction:string, index:number) => (
                  <li
                    key={index}
                    className="flex gap-2 text-[12px] leading-4 text-[#8B919A]"
                  >
                    <span className="shrink-0 text-[#8B919A]">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* ================= ACTION BUTTONS ================= */}
            <div className="mt-5 justify-center sm:justify-start flex flex-wrap items-center gap-2">
              <AddToTodaysPlan workout={workout} />

              <SavedPlanButton workout={workout} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

/* ================= DETAIL ROW ================= */

const DetailRow = ({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string | number;
  last?: boolean;
}) => {
  return (
    <div
      className={`flex items-center justify-between px-3 py-2 ${
        !last ? "border-b border-[#25282D]" : ""
      }`}
    >
      <span className="text-[7px] font-medium uppercase tracking-wide text-[#7D838D]">
        {label}
      </span>

      <span className="text-[8px] font-medium text-gray-300">
        {value}
      </span>
    </div>
  );
};

export default WorkoutDetails;