import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-[#1D1F23] bg-[#0B0C0E]">
      <div
        className="
        container
          mx-auto
          flex
          min-h-[62px]
          w-full
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-3
          px-4
          py-4
          sm:flex-row
          sm:px-6
          sm:py-0
          
        "
      >
        {/* ================= LOGO ================= */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Image
            src={logo}
            width={25}
            height={25}
            alt="FitLog"
            className="h-[25px] w-[25px]"
          />

          <span className="text-[15px] font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* ================= COPYRIGHT ================= */}
        <p className="text-center text-[9px] text-[#656A73] sm:text-right">
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard.
          Log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;