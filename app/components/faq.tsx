import FCard from "./faq_card";

export default function FAQ() {
  return (
    <div className="text-2xl px-3 xl:px-8 md:px-20 2xl:px-80 dark:text-white">
      <h5 className="md:text-left text-left font-bold mb-1 text-purple-950">
        Frequently Asked Questions
      </h5>
      <p className="text-sm p-2">Find answers to some of the most common questions we receive about our services.</p>
      <div className="flex flex-col gap-2">
        <FCard
          question="What services does Cofletx offer?"
          answer="Cofletx provides a comprehensive range of services including project management, building drawings, site planning, and consultation. We work on both residential and commercial projects, ensuring that every aspect of construction is handled with expertise and precision."
        />
        <FCard
          question="What is the typical timeline for a construction project?"
          answer="The timeline for a construction project varies depending on its size and complexity. After an initial consultation and assessment, we can provide you with a detailed timeline that outlines key milestones from planning to completion."
        />
        <FCard
          question=" How can I get a quote for my construction project?"
          answer="To receive a quote, please contact us through our website or call our office. We will schedule a consultation to discuss your project details, requirements, and budget, allowing us to provide you with an accurate estimate."
        />
        <FCard
          question="Do you handle both residential and commercial projects?"
          answer="Yes, Cofletx specializes in both residential and commercial construction projects. Our team has the expertise to manage a diverse range of projects, ensuring high-quality results regardless of the scope.

"
        />
        <FCard
          question="What should I consider before starting a construction project?"
          answer="Before starting a construction project, consider your budget, timeline, design preferences, and any local regulations or zoning laws. Our consultation services can help clarify these aspects and guide you through the planning process."
        />
      </div>
    </div>
  );
}
