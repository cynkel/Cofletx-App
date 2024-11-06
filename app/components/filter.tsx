"use client";

import FilterButton from "./button";
import { useState } from "react";

export default function Section() {
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
        </div>
      </div>
    </>
  );
}
