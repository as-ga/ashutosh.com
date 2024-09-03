import React from "react";
import Image from "next/image";

export default function Skill() {
  const skills = [
    // Languages
    "javascript",
    "typescript",
    "python",

    // Frontend
    "redux",
    "sass",
    "tailwindcss",

    // Backend
    "nextjs",
    "nodejs",
    "express",
    // "django",
    "flask",

    // Database
    "postgresql",
    "mongodb",
    // "graphql",
    // "kafka",
    "redis",

    // Devops
    "docker",
    "kubernetes",
    // "jenkins",
    // "amazonwebservices",

    // other tools or softwares
    "git",
    "github",
    "postman",
  ];

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-10 mb-5">Skill</h1>
      <div className="flex flex-wrap justify-center items-center">
        {skills.map((skill) => (
          <Image
            className="border-2 rounded-lg p-2 mr-5 mb-5 hover:scale-110 transition-all duration-300"
            key={skill}
            src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${skill}/${skill}-original.svg`}
            alt={skill}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
}
