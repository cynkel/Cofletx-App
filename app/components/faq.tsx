"use client";

import { useState } from "react";
import FCard from "./faq_card";

export default function FAQ() {
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="text-2xl px-3 xl:px-8 md:px-20 2xl:px-80">
      <h3 className="text-center font-bold mb-1 text-purple-950 dark:text-white drop-shadow-lg">
        Frequently Asked Questions
      </h3>
      <p className="text-sm text-center p-2 dark:text-white">
        Find answers to some of the most common questions we receive about our
        services.
      </p>
      <div className="flex flex-col gap-2">
        <FCard
          question="What services does Cofletx offer?"
          answer="Cofletx provides a comprehensive range of services including project management, building drawings, site planning, and consultation. We work on both residential and commercial projects, ensuring that every aspect of construction is handled with expertise and precision."
          active={isActive === 1}
          focused={() => {
            setIsActive((prev) => {
              if (prev === 1) {
                return 0;
              } else {
                return 1;
              }
            });
          }}
        />
        <FCard
          question="What is the typical timeline for a construction project?"
          answer="The timeline for a construction project varies depending on its size and complexity. After an initial consultation and assessment, we can provide you with a detailed timeline that outlines key milestones from planning to completion."
          active={isActive === 2}
          focused={() => {
            setIsActive((prev) => {
              if (prev === 2) {
                return 0;
              } else {
                return 2;
              }
            });
          }}
        />
        <FCard
          question=" How can I get a quote for my construction project?"
          answer="To receive a quote, please contact us through our website or call our office. We will schedule a consultation to discuss your project details, requirements, and budget, allowing us to provide you with an accurate estimate."
          active={isActive === 3}
          focused={() => {
            setIsActive((prev) => {
              if (prev === 3) {
                return 0;
              } else {
                return 3;
              }
            });
          }}
        />
        <FCard
          question="Do you handle both residential and commercial projects?"
          answer="Yes, Cofletx specializes in both residential and commercial construction projects. Our team has the expertise to manage a diverse range of projects, ensuring high-quality results regardless of the scope."
          active={isActive === 4}
          focused={() => {
            setIsActive((prev) => {
              if (prev === 4) {
                return 0;
              } else {
                return 4;
              }
            });
          }}
        />
        <FCard
          question="What should I consider before starting a construction project?"
          answer="Before starting a construction project, consider your budget, timeline, design preferences, and any local regulations or zoning laws. Our consultation services can help clarify these aspects and guide you through the planning process."
          active={isActive === 5}
          focused={() => {
            setIsActive((prev) => {
              if (prev === 5) {
                return 0;
              } else {
                return 5;
              }
            });
          }}
        />
      </div>
    </div>
  );
}
