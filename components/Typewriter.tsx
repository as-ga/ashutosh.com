"use client";
import React from "react";
import TypeWriter from "typewriter-effect";

export function Typewriter() {
  return (
    <h2 className="text-2xl font-black text-[#DC143C]">
      <TypeWriter
        options={{
          strings: [
            "Software Developer",
            "Full Stack Developer",
            "JS & TS Developer",
            "Python Developer",
          ],
          autoStart: true,
          loop: true,
          cursor: "|",
          wrapperClassName: "typewriterpara",
        }}
      />
    </h2>
  );
}
