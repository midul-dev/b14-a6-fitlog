const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0B0C0E] text-white">
      {/* ================= NAVBAR ================= */}
      <nav className="border-b border-[#1D1F23] bg-[#0B0C0E]">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 animate-pulse rounded bg-[#252A31]" />
            <div className="h-3 w-10 animate-pulse rounded bg-[#252A31]" />
          </div>

          {/* Center nav */}
          <div className="hidden items-center gap-7 lg:flex">
            <div className="h-3 w-12 animate-pulse rounded bg-[#252A31]" />
            <div className="h-3 w-12 animate-pulse rounded bg-[#252A31]" />
          </div>

          {/* Right nav */}
          <div className="hidden items-center gap-5 lg:flex">
            <div className="flex items-center gap-2">
              <div className="h-3 w-7 animate-pulse rounded bg-[#252A31]" />
              <div className="h-4 w-4 animate-pulse rounded-full bg-[#252A31]" />
            </div>

            <div className="flex items-center gap-2">
              <div className="h-3 w-8 animate-pulse rounded bg-[#252A31]" />
              <div className="h-4 w-4 animate-pulse rounded-full bg-[#252A31]" />
            </div>
          </div>

          {/* Mobile menu */}
          <div className="h-7 w-7 animate-pulse rounded bg-[#252A31] lg:hidden" />
        </div>
      </nav>

      {/* ================= PAGE ================= */}
      <main className="min-h-[calc(100vh-64px)] bg-[#0B0C0E] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          {/* ================= BACK ================= */}
          <div className="mb-5 flex items-center gap-2">
            <div className="h-3 w-3 animate-pulse rounded bg-[#252A31]" />
            <div className="h-2.5 w-24 animate-pulse rounded bg-[#252A31]" />
          </div>

          {/* ================= MAIN CARD ================= */}
          <div className="grid overflow-hidden rounded-xl border border-[#272B31] bg-[#15171C] lg:grid-cols-[0.95fr_1fr]">

            {/* ================= LEFT IMAGE ================= */}
            <div className="p-4 sm:p-5 lg:p-6">
              <div className="h-[360px] w-full animate-pulse rounded-lg bg-[#1B1E23] sm:h-[450px] lg:h-[520px]" />
            </div>

            {/* ================= RIGHT CONTENT ================= */}
            <div className="flex flex-col px-4 pb-5 pt-2 sm:px-5 sm:pb-6 lg:px-5 lg:py-2">

              {/* Title */}
              <div className="space-y-2">
                <div className="h-8 w-4/5 animate-pulse rounded bg-[#252A31] sm:h-9" />

                <div className="mt-2 space-y-1.5">
                  <div className="h-2 w-full max-w-xl animate-pulse rounded bg-[#202329]" />
                  <div className="h-2 w-4/5 max-w-lg animate-pulse rounded bg-[#202329]" />
                </div>
              </div>

              {/* Muscle Groups */}
              <div className="mt-3 flex gap-1.5">
                <div className="h-4 w-12 animate-pulse rounded-full bg-[#252A31]" />
                <div className="h-4 w-10 animate-pulse rounded-full bg-[#252A31]" />
              </div>

              {/* ================= INFO TABLE ================= */}
              <div className="mt-4 overflow-hidden rounded-lg border border-[#272B31] bg-[#171A20]">

                {/* Row 1 */}
                <div className="flex h-7 items-center justify-between border-b border-[#25282D] px-3">
                  <div className="h-2 w-14 animate-pulse rounded bg-[#252A31]" />
                  <div className="h-2 w-20 animate-pulse rounded bg-[#252A31]" />
                </div>

                {/* Row 2 */}
                <div className="flex h-7 items-center justify-between border-b border-[#25282D] px-3">
                  <div className="h-2 w-16 animate-pulse rounded bg-[#252A31]" />
                  <div className="h-2 w-16 animate-pulse rounded bg-[#252A31]" />
                </div>

                {/* Row 3 */}
                <div className="flex h-7 items-center justify-between border-b border-[#25282D] px-3">
                  <div className="h-2 w-8 animate-pulse rounded bg-[#252A31]" />
                  <div className="h-2 w-4 animate-pulse rounded bg-[#252A31]" />
                </div>

                {/* Row 4 */}
                <div className="flex h-7 items-center justify-between border-b border-[#25282D] px-3">
                  <div className="h-2 w-8 animate-pulse rounded bg-[#252A31]" />
                  <div className="h-2 w-8 animate-pulse rounded bg-[#252A31]" />
                </div>

                {/* Row 5 */}
                <div className="flex h-7 items-center justify-between border-b border-[#25282D] px-3">
                  <div className="h-2 w-14 animate-pulse rounded bg-[#252A31]" />
                  <div className="h-2 w-12 animate-pulse rounded bg-[#252A31]" />
                </div>

                {/* Row 6 */}
                <div className="flex h-7 items-center justify-between border-b border-[#25282D] px-3">
                  <div className="h-2 w-12 animate-pulse rounded bg-[#252A31]" />
                  <div className="h-2 w-14 animate-pulse rounded bg-[#252A31]" />
                </div>

                {/* Row 7 */}
                <div className="flex h-7 items-center justify-between px-3">
                  <div className="h-2 w-10 animate-pulse rounded bg-[#252A31]" />
                  <div className="h-2 w-8 animate-pulse rounded bg-[#252A31]" />
                </div>
              </div>

              {/* ================= INSTRUCTIONS ================= */}
              <div className="mt-4">

                {/* Heading */}
                <div className="h-2.5 w-20 animate-pulse rounded bg-[#252A31]" />

                {/* Instructions */}
                <div className="mt-2 space-y-2">

                  <div className="flex gap-2">
                    <div className="h-2 w-2 shrink-0 animate-pulse rounded bg-[#252A31]" />
                    <div className="h-2 w-full animate-pulse rounded bg-[#202329]" />
                  </div>

                  <div className="flex gap-2">
                    <div className="h-2 w-2 shrink-0 animate-pulse rounded bg-[#252A31]" />
                    <div className="h-2 w-11/12 animate-pulse rounded bg-[#202329]" />
                  </div>

                  <div className="flex gap-2">
                    <div className="h-2 w-2 shrink-0 animate-pulse rounded bg-[#252A31]" />
                    <div className="h-2 w-4/5 animate-pulse rounded bg-[#202329]" />
                  </div>

                  <div className="flex gap-2">
                    <div className="h-2 w-2 shrink-0 animate-pulse rounded bg-[#252A31]" />
                    <div className="h-2 w-3/4 animate-pulse rounded bg-[#202329]" />
                  </div>

                </div>
              </div>

              {/* ================= ACTION BUTTONS ================= */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <div className="h-7 w-32 animate-pulse rounded-md bg-[#252A31]" />

                <div className="h-7 w-24 animate-pulse rounded-md bg-[#252A31]" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#1D1F23] bg-[#0B0C0E]">
        <div className="mx-auto flex min-h-[62px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="h-[18px] w-[18px] animate-pulse rounded bg-[#252A31]" />
            <div className="h-2.5 w-10 animate-pulse rounded bg-[#252A31]" />
          </div>

          <div className="h-2 w-52 animate-pulse rounded bg-[#1F2227]" />
        </div>
      </footer>
    </main>
  );
};

export default Loading;