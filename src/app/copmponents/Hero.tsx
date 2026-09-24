import Image from "next/image";
import HeroImage from "@/assets/banner.png";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#0B0C0E] px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          overflow-hidden
          rounded-xl
          border
          border-[#25272A]
          bg-[#15171C]
          px-5
          py-8
          
          sm:px-8
          sm:py-10
          md:px-10
          lg:grid-cols-2
          lg:px-12
          lg:py-12
        "
      >
        {/* ================= CONTENT ================= */}
        <div className="z-10 max-w-xl">
          {/* Small title */}
          <p
            className="
              mb-3
              text-[9px]
              font-bold
              tracking-wider
              text-[#C2F800]
              sm:mb-4
              sm:text-[10px]
            "
          >
            WORKOUT LIBRARY
          </p>

          {/* Heading */}
          <h1
            className="
              max-w-[650px]
              text-3xl
              font-black
              uppercase
              leading-[0.95]
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
          "
          >
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-lg
              text-xs
              leading-5
              text-gray-400
              sm:mt-5
              sm:text-sm
              sm:leading-6
            "
          >
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Button */}
          <button
            className="
            mx-auto
            block   
            lg:mx-0 
              mt-6
              rounded-md
              bg-[#C2F800]
              px-4
              py-2.5
              text-[9px]
              font-bold
              uppercase
              tracking-wide
              text-black
              transition
              hover:bg-[#b1e600]
              hover:shadow-[0_0_20px_rgba(194,248,0,0.15)]
              sm:mt-6
              sm:px-5
              sm:py-3
              sm:text-[10px]
            "
          >
            Browse Workouts
          </button>
        </div>

        {/* ================= IMAGE ================= */}
        <div
          className="
            mt-8
            flex
            items-center
            justify-center
            sm:mt-10
            lg:mt-0
            lg:justify-end
          "
        >
          <Image
            src={HeroImage}
            width={600}
            height={400}
            alt="Workout illustration"
            priority
            className="
              h-auto
              w-full
              max-w-[260px]
              object-contain
              sm:max-w-[340px]
              md:max-w-[400px]
              lg:max-w-[480px]
          "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
