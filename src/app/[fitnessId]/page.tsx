import Image from "next/image";
import Link from "next/link";
import getFitnessData from "@/lib/fitnessData";
import { IData } from "@/types/dataType";

const WorkoutDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const allData = await getFitnessData();

  const workout = allData.find(
    (item: IData) => item.id === Number(id)
  );

  if (!workout) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#0B0C0E] px-4">
        <div className="text-center">
          <h1 className="text-3xl font-black uppercase text-white">
            Workout Not Found
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            The workout you are looking for does not exist.
          </p>

          <Link
            href="/workouts"
            className="mt-6 inline-block rounded-md bg-[#C2F800] px-5 py-3 text-xs font-bold uppercase text-black transition hover:bg-[#b1e600]"
          >
            Back to Library
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B0C0E] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* ================= BACK ================= */}
        <Link
          href="/workouts"
          className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-gray-500 transition hover:text-white"
        >
          <span>←</span>
          Back to Library
        </Link>

        {/* ================= MAIN CARD ================= */}
        <div className="overflow-hidden rounded-2xl border border-[#272B31] bg-[#15171C]">

          {/* ================= HERO IMAGE ================= */}
          <div className="relative aspect-[16/7] w-full overflow-hidden">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#15171C] via-transparent to-transparent" />

            {/* Difficulty */}
            <div className="absolute right-4 top-4">
              <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                {workout.difficulty}
              </span>
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="p-5 sm:p-7 lg:p-10">

            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscleGroup, index) => (
                <span
                  key={index}
                  className="rounded-full bg-[#C2F800] px-3 py-1.5 text-[9px] font-black uppercase tracking-wide text-black"
                >
                  {muscleGroup}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="max-w-3xl text-3xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {workout.name}
            </h1>

            {/* Equipment */}
            <p className="mt-3 text-xs text-[#7D838D] sm:text-sm">
              {workout.equipment}
            </p>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
              {workout.description}
            </p>

            {/* ================= STATS ================= */}
            <div className="my-8 grid grid-cols-2 gap-3 border-y border-[#272B31] py-6 sm:grid-cols-3 lg:grid-cols-6">

              {/* Duration */}
              <Stat
                label="Duration"
                value={`${workout.duration} min`}
                icon="clock"
              />

              {/* Calories */}
              <Stat
                label="Calories"
                value={`${workout.caloriesBurned} kcal`}
                icon="fire"
              />

              {/* Sets */}
              <Stat
                label="Sets"
                value={workout.sets}
                icon="sets"
              />

              {/* Reps */}
              <Stat
                label="Reps"
                value={workout.reps}
                icon="reps"
              />

              {/* Difficulty */}
              <Stat
                label="Difficulty"
                value={workout.difficulty}
                icon="level"
              />

              {/* Rating */}
              <Stat
                label="Rating"
                value={workout.rating}
                icon="star"
              />
            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="max-w-3xl">

              <h2 className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                How to Perform
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Follow these steps for proper form.
              </p>

              <div className="mt-6 space-y-3">
                {workout.instructions.map(
                  (instruction, index) => (
                    <div
                      key={index}
                      className="flex gap-4 rounded-xl border border-[#272B31] bg-[#111318] p-4 transition hover:border-[#363B43]"
                    >
                      {/* Number */}
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1A2312] text-[10px] font-black text-[#C2F800]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Instruction */}
                      <p className="pt-1 text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">
                        {instruction}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* ================= ACTION ================= */}
            <div className="mt-8 border-t border-[#272B31] pt-6">
              <button
                className="
                  w-full
                  rounded-lg
                  bg-[#C2F800]
                  px-6
                  py-3.5
                  text-xs
                  font-black
                  uppercase
                  tracking-wide
                  text-black
                  transition
                  hover:bg-[#b1e600]
                  hover:shadow-[0_0_25px_rgba(194,248,0,0.12)]
                  sm:w-auto
                "
              >
                Add to My Plan
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetails;


/* ================= STAT COMPONENT ================= */

const Stat = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | number;
  icon: string;
}) => {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#20252D] text-[#C2F800]">
        {icon === "clock" && (
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="8.5" />
            <path
              strokeLinecap="round"
              d="M12 7v5l3 2"
            />
          </svg>
        )}

        {icon === "fire" && (
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.4 2.5c.4 3.1-1.5 4.7-3.1 6.2-1.6 1.5-3 2.9-3 5.5a5.7 5.7 0 0 0 11.4 0c0-2.8-1.6-5.3-5.3-7.7.2 1.6-.2 2.7-1.1 3.5.1-2.3-.4-4.7 1.1-7.5Z" />
          </svg>
        )}

        {icon === "sets" && (
          <span className="text-xs font-black">S</span>
        )}

        {icon === "reps" && (
          <span className="text-xs font-black">R</span>
        )}

        {icon === "level" && (
          <span className="text-xs font-black">L</span>
        )}

        {icon === "star" && (
          <svg
            className="h-4 w-4"
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
        )}
      </div>

      <div className="min-w-0">
        <p className="text-[8px] uppercase tracking-wide text-[#646A73]">
          {label}
        </p>

        <p className="mt-0.5 truncate text-[10px] font-semibold text-gray-300">
          {value}
        </p>
      </div>

    </div>
  );
};