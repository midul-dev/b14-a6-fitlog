"use client";

import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const getNavClass = (path : string) =>
    pathname === path
      ? "rounded-full bg-[#1A2312] px-4 py-2 text-xs font-semibold text-[#C2F800]"
      : "rounded-full px-4 py-2 text-xs text-gray-400 transition hover:bg-[#151619] hover:text-white";

  return (
    <nav className="border-b border-[#1F2023] bg-[#0B0C0E] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* ================= LOGO ================= */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-white"
        >
          <Image
            src={logo}
            width={28}
            height={28}
            alt="FitLog"
            className="h-7 w-7"
          />

          <span className="text-sm font-bold tracking-wide sm:text-base">
            FITLOG
          </span>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-1">
            <li>
              <Link
                href="/workouts"
                className={getNavClass("/workouts")}
              >
                Workouts
              </Link>
            </li>

            <li>
              <Link
                href="/my-plan"
                className={getNavClass("/my-plan")}
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* ================= RIGHT DESKTOP ================= */}
        <div className="hidden items-center gap-5 lg:flex">

          <Link
            href="/plan"
            className="flex items-center gap-2 text-xs text-gray-300 transition hover:text-white"
          >
            Plan

            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C2F800] text-[9px] font-bold text-black">
              0
            </span>
          </Link>

          <Link
            href="/saved"
            className="flex items-center gap-2 text-xs text-gray-500 transition hover:text-white"
          >
            Saved

            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#303136] text-[9px]">
              0
            </span>
          </Link>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div className="dropdown dropdown-end lg:hidden">

          <button
            tabIndex={0}
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[#242528] bg-[#111214] text-gray-300 transition hover:bg-[#191A1D] hover:text-white"
            aria-label="Open navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Dropdown */}
          <ul
            tabIndex={-1}
            className="menu dropdown-content z-50 mt-3 w-60 rounded-xl border border-[#242528] bg-[#111214] p-3 shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
          >

            {/* Navigation */}
            <li>
              <Link
                href="/workouts"
                className={getNavClass("/workouts")}
              >
                Workouts
              </Link>
            </li>

            <li>
              <Link
                href="/my-plan"
                className={getNavClass("/my-plan")}
              >
                My Plan
              </Link>
            </li>

            <div className="my-2 border-t border-[#242528]" />

            {/* Plan */}
            <li>
              <Link
                href="/plan"
                className="flex items-center justify-between rounded-lg px-4 py-2.5 text-xs text-gray-300 hover:bg-[#191A1D] hover:text-white"
              >
                <span>Plan</span>

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800] text-[9px] font-bold text-black">
                  0
                </span>
              </Link>
            </li>

            {/* Saved */}
            <li>
              <Link
                href="/saved"
                className="flex items-center justify-between rounded-lg px-4 py-2.5 text-xs text-gray-300 hover:bg-[#191A1D] hover:text-white"
              >
                <span>Saved</span>

                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#303136] text-[9px] text-gray-400">
                  0
                </span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;