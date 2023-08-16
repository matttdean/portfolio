import React from "react";
import Image from "next/image";
import tasker from "@/public/tasker.png";
import huBrilliance from "@/public/huBrilliance.png";
import contactCard from "@/public/contactCard.png";
import patientperspective from "@/public/patientperspective.png";
import patientinsider from "@/public/patientinsider.png";
import tmp from "@/public/tmp.png";

const websites = [
  {
    name: "HU Brilliance",
    url: "https://matttdean.github.io/brilliance/",
    description:
      "This project was created alongside Health Union's marketing team. I worked closely with the lead designer to create an engaging experience that was representitive of the HU communities",
    image: huBrilliance,
    skills: ["Developed"],
  },
  {
    name: "Contact Card",
    url: "https://matttdean.com/portfolio",
    description:
      "Search engine that is used for this thing that is here and it is a thing that is a thing and these are words that are being used to write all of this so it will fill up space",
    image: contactCard,
    skills: ["Designed", "Developed"],
  },
  {
    name: "Jordan's Journey",
    url: "https://plaquepsoriasis.com/interactive-psoriasis-journey",
    description:
      "Search engine that is used for this thing that is here and it is a thing that is a thing and these are words that are being used to write all of this so it will fill up space",
    image: patientperspective,
    skills: ["Designed", "Developed", "Illustrated",],
  },
  {
    name: "Patient Insider",
    url: "https://psoriatic-arthritis.com/overwhelmed-guilt",
    description:
      "Search engine that is used for this thing that is here and it is a thing that is a thing and these are words that are being used to write all of this so it will fill up space",
    image: patientinsider,
    skills: ["Developed"],
  },
  {
    name: "The Midnight Post",
    url: "https://matttdean.github.io/TheMidnightPost/",
    description:
      "Search engine that is used for this thing that is here and it is a thing that is a thing and these are words that are being used to write all of this so it will fill up space",
    image: tmp,
    skills: ["Developed"],
  },
];

export default function Websites() {
  return (
    <main className="flex flex-col items-center min-h-screen max-w-[90dvw] mx-auto scroll-mt-64 gap-5">
      <h1 className="text-4xl font-semibold">Websites</h1>
      <p className="">
        A collection of websites I have designed, developed, or both.
      </p>
      <div className="flex items-center justify-center flex-wrap gap-5">
        {websites.map((website, index) => (
          <div
            key={index}
            className="group bg-gray-100 max-w-[32rem] h-auto w-[90dvw] border border-black/5 overflow-hidden rounded-lg relative sm:h-[20rem] hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white flex flex-col justify-center items-center dark:border-white/5 p-5"
          >
            <div className="w-full h-[10rem] sm:h-[50rem] overflow-hidden rounded-sm">
              <Image
                src={website.image}
                alt={website.name}
                className={`${
                  index === 1 ? `website-animation-2` : `website-animation`
                } w-full h-auto  group-hover:play`}
              />
            </div>
            <div className="w-full h-full flex items-center justify-between mt-5">
              <h2 className="text-3xl font-semibold ">{website.name}</h2>
              <a
                target="_blank"
                className="sm:absolute sm:bottom-5 sm:right-5 bg-black/[0.7] px-3 py-1 text-lg tracking-wider text-white rounded-md dark:text-white/70 hover:bg-black/[0.8] dark:hover:bg-black/[0.5] dark:hover:text-white/90 active:translate-y-1 flex items-center"
                href={website.url}
              >
                Demo
              </a>
            </div>
            <p className="ml-0 mr-auto">{website.skills.join(' | ')}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
