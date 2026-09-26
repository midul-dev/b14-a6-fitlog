const Loading = () => {
  const skeletonCards = Array.from({ length: 12 });

  return (
    <main className="min-h-screen bg-[#0B0C0E] text-white">
      {/* ================= NAVBAR ================= */}
      

      {/* ================= HERO ================= */}
      <section className="bg-[#0B0C0E] px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl items-center overflow-hidden rounded-xl border border-[#25272A] bg-[#15171C] px-5 py-8 sm:px-8 sm:py-10 md:px-10 lg:grid-cols-2 lg:px-12 lg:py-12">
          {/* Hero Content */}
          <div className="z-10 max-w-xl">
            {/* Small heading */}
            <div className="h-2.5 w-24 animate-pulse rounded bg-[#252A31]" />

            {/* Main heading */}
            <div className="mt-4 space-y-2">
              <div className="h-8 w-full max-w-[500px] animate-pulse rounded bg-[#252A31] sm:h-10" />
              <div className="h-8 w-4/5 max-w-[400px] animate-pulse rounded bg-[#252A31] sm:h-10" />
            </div>

            {/* Description */}
            <div className="mt-5 space-y-2">
              <div className="h-2.5 w-full max-w-[430px] animate-pulse rounded bg-[#252A31]" />
              <div className="h-2.5 w-4/5 max-w-[360px] animate-pulse rounded bg-[#252A31]" />
            </div>

            {/* Button */}
            <div className="mt-6 h-10 w-28 animate-pulse rounded-md bg-[#252A31]" />
          </div>

          {/* Hero Image */}
          <div className="mt-8 flex items-center justify-center lg:mt-0 lg:justify-end">
            <div className="h-[250px] w-full max-w-[400px] animate-pulse rounded-lg bg-[#1B1E23] sm:h-[300px] lg:h-[360px]" />
          </div>
        </div>
      </section>

      {/* ================= LIBRARY ================= */}
      <section
        id="library"
        className="bg-[#0B0C0E] px-4 pb-8 pt-8 sm:px-6 sm:pt-10 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          {/* Library Heading */}
          <div>
            <div className="h-7 w-40 animate-pulse rounded bg-[#252A31] sm:h-8" />

            <div className="mt-2 h-2.5 w-56 animate-pulse rounded bg-[#1F2227]" />
          </div>

          {/* Workout Cards */}
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skeletonCards.map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-[#272B31] bg-[#15171C]"
              >
                {/* Image Skeleton */}
                <div className="aspect-[1.7/1] w-full animate-pulse bg-[#1B1E23]" />

                {/* Card Content */}
                <div className="px-3.5 pb-3.5 pt-3">
                  {/* Tags */}
                  <div className="flex gap-1.5">
                    <div className="h-3.5 w-10 animate-pulse rounded-full bg-[#252A31]" />

                    <div className="h-3.5 w-10 animate-pulse rounded-full bg-[#252A31]" />
                  </div>

                  {/* Title */}
                  <div className="mt-2.5 h-3 w-3/5 animate-pulse rounded bg-[#252A31]" />

                  {/* Equipment */}
                  <div className="mt-2 h-2 w-2/5 animate-pulse rounded bg-[#202329]" />

                  {/* Divider */}
                  <div className="my-3 border-t border-[#25282D]" />

                  {/* Stats */}
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-12 animate-pulse rounded bg-[#202329]" />
                    <div className="h-2 w-12 animate-pulse rounded bg-[#202329]" />
                    <div className="h-2 w-8 animate-pulse rounded bg-[#202329]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      
    </main>
  );
};

export default Loading;