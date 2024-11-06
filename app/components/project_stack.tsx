"use client";

import { ProjectCard } from "../components/card";
import FilterButton from "./button";
import { useState } from "react";

const category = [
  "Commercial",
  "Tourism / Hospitality",
  "Residential",
  "Industrial",
];

export default function ProjectStack() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="mb-3">
        <div className="flex justify-center flex-wrap">
          <FilterButton
            filter="All"
            active={activeIndex === 0}
            current={() => setActiveIndex(0)}
          />
          <FilterButton
            filter="Commercial"
            active={activeIndex === 1}
            current={() => setActiveIndex(1)}
          />
          <FilterButton
            filter="Tourism / Hospitality"
            active={activeIndex === 2}
            current={() => setActiveIndex(2)}
          />
          <FilterButton
            filter="Residential"
            active={activeIndex === 3}
            current={() => setActiveIndex(3)}
          />
          <FilterButton
            filter="Industrial"
            active={activeIndex === 4}
            current={() => setActiveIndex(4)}
          />
          <FilterButton
            filter="Health"
            active={activeIndex === 5}
            current={() => setActiveIndex(5)}
          />
        </div>
      </div>
      <div className="px-6 md:px-6 lg:px-16 xl:px-32 grid grid-cols-1 grid-rows-services gap-3 md:grid-cols-services lg:grid-cols-lg">
        <ProjectCard
          title="Construction of Top Co. Ltd Head office"
          subtext={category[0]}
          imgSource="/top_oil.webp"
          filter={activeIndex === 1 || activeIndex === 0}
        />
        <ProjectCard
          title="Construction of Top Co. Ltd Head office"
          subtext="Tourism / Hospitality"
          imgSource="/resort.webp"
          filter={activeIndex === 2 || activeIndex === 0}
        />
        <ProjectCard
          title="Construction of Top Co. Ltd Head office"
          subtext="Health"
          imgSource="/med.jpg"
          filter={activeIndex === 5 || activeIndex === 0}
        />
        <ProjectCard
          title="Construction of Top Co. Ltd Head office"
          subtext="Residential"
          imgSource="/house.webp"
          filter={activeIndex === 3 || activeIndex === 0}
        />
        <ProjectCard
          title="Construction of Top Co. Ltd Head office"
          subtext="Residential"
          imgSource="/house_2.webp"
          filter={activeIndex === 3 || activeIndex === 0}
        />
        <ProjectCard
          title="Construction of Top Co. Ltd Head office"
          subtext="Industrial"
          imgSource="/haulage.webp"
          filter={activeIndex === 4 || activeIndex === 0}
        />
      </div>
    </>
  );
}
