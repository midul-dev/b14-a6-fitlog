const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0B0C0E] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <section>
          {/* My Plan */}
          <div className="h-8 w-32 animate-pulse rounded bg-[#252A31] sm:h-9 sm:w-36" />

          {/* Description */}
          <div className="mt-2 h-2.5 w-64 animate-pulse rounded bg-[#1F2227] sm:w-72" />
        </section>

        {/* ================= SUMMARY ================= */}
        <section className="mt-5 grid grid-cols-3 overflow-hidden rounded-xl border border-[#272B31] bg-[#15171C]">

          {/* Exercises */}
          <div className="relative px-3 py-4 sm:px-5 sm:py-5">
            <div className="absolute right-0 top-1/2 h-8 w-px -translate-y-1/2 bg-[#272B31]" />

            <div className="h-2 w-12 animate-pulse rounded bg-[#252A31]" />

            <div className="mt-2 h-6 w-5 animate-pulse rounded bg-[#252A31]" />
          </div>

          {/* Minutes */}
          <div className="relative px-3 py-4 sm:px-5 sm:py-5">
            <div className="absolute right-0 top-1/2 h-8 w-px -translate-y-1/2 bg-[#272B31]" />

            <div className="h-2 w-10 animate-pulse rounded bg-[#252A31]" />

            <div className="mt-2 h-6 w-5 animate-pulse rounded bg-[#252A31]" />
          </div>

          {/* Calories */}
          <div className="px-3 py-4 sm:px-5 sm:py-5">
            <div className="h-2 w-12 animate-pulse rounded bg-[#252A31]" />

            <div className="mt-2 h-6 w-5 animate-pulse rounded bg-[#252A31]" />
          </div>
        </section>

        {/* ================= FILTER BAR ================= */}
        <section className="mt-4 flex items-center justify-between">

          {/* Tabs */}
          <div className="flex rounded-md border border-[#272B31] bg-[#15171C] p-0.5">
            <div className="h-7 w-20 animate-pulse rounded-[4px] bg-[#252A31]" />

            <div className="ml-0.5 h-7 w-14 animate-pulse rounded-[4px] bg-[#1F2227]" />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            {/* Hide label on very small screens */}
            <div className="hidden h-2 w-10 animate-pulse rounded bg-[#252A31] sm:block" />

            <div className="h-7 w-16 animate-pulse rounded-md border border-[#272B31] bg-[#15171C] sm:w-20" />
          </div>
        </section>

        {/* ================= WORKOUT LIST ================= */}
        <section className="mt-3 space-y-2">

          {/* Row 1 */}
          <WorkoutSkeleton />

          {/* Row 2 */}
          <WorkoutSkeleton />

          {/* Row 3 */}
          <WorkoutSkeleton />

          {/* Row 4 */}
          <WorkoutSkeleton />
        </section>
      </div>
    </main>
  );
};


/* ================= WORKOUT ROW SKELETON ================= */

const WorkoutSkeleton = () => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-[#272B31] bg-[#15171C] p-2 sm:gap-4 sm:p-2.5">

      {/* Image */}
      <div className="h-12 w-20 shrink-0 animate-pulse rounded-md bg-[#1F2227] sm:h-14 sm:w-24" />

      {/* Workout Info */}
      <div className="min-w-0 flex-1">

        {/* Workout Name */}
        <div className="h-2.5 w-32 animate-pulse rounded bg-[#252A31] sm:w-40" />

        {/* Calories */}
        <div className="mt-2 h-2 w-12 animate-pulse rounded bg-[#202329]" />

        {/* Stats */}
        <div className="mt-2 flex items-center gap-2 sm:gap-3">
          <div className="h-2 w-11 animate-pulse rounded bg-[#202329]" />

          <div className="h-2 w-11 animate-pulse rounded bg-[#202329]" />

          <div className="h-2 w-8 animate-pulse rounded bg-[#202329]" />
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-1.5">

        {/* View Details */}
        <div className="hidden h-6 w-20 animate-pulse rounded-md bg-[#252A31] sm:block" />

        {/* Main Action */}
        <div className="h-6 w-16 animate-pulse rounded-md bg-[#252A31] sm:w-20" />

        {/* Remove */}
        <div className="h-4 w-4 animate-pulse rounded bg-[#252A31]" />
      </div>
    </div>
  );
};

export default Loading;