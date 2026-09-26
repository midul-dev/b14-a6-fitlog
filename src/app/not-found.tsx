import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0C0E] px-4">
      <section className="w-full max-w-xl rounded-2xl border border-[#272B31] bg-[#15171C] px-6 py-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.3)] sm:px-10 sm:py-16">

        {/* 404 */}
        <div className="relative">
          <h1 className="text-[100px] font-black leading-none tracking-[-0.08em] text-[#C2F800] sm:text-[140px]">
            404
          </h1>

          <div className="absolute inset-x-0 bottom-1 mx-auto h-px max-w-[180px] bg-[#272B31]" />
        </div>

        {/* Title */}
        <h2 className="mt-7 text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
          WORKOUT NOT FOUND
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-md text-[10px] leading-5 text-[#7D838D] sm:text-xs sm:leading-6">
          Looks like this page skipped leg day. The workout or page you&apos;re
          looking for doesn&apos;t exist.
        </p>

        {/* Actions */}
        <div className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
          <Link
            href="/"
            className="w-full rounded-md bg-[#C2F800] px-5 py-2.5 text-[9px] font-bold uppercase tracking-wide text-black transition-all duration-200 hover:scale-105 hover:bg-[#405006] hover:text-white sm:w-auto"
          >
            ← Back Home
          </Link>

          <Link
            href="/my-plan"
            className="w-full rounded-md border border-[#30343A] bg-[#111318] px-5 py-2.5 text-[9px] font-bold uppercase tracking-wide text-gray-300 transition-all duration-200 hover:border-[#454A52] hover:bg-[#252A31] hover:text-white sm:w-auto"
          >
            Browse My Plan
          </Link>
        </div>

        {/* Small status */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C2F800]" />
          <span className="text-[7px] font-medium uppercase tracking-[0.2em] text-[#646A73]">
            FITLOG / ERROR 404
          </span>
        </div>
      </section>
    </main>
  );
};

export default NotFound;