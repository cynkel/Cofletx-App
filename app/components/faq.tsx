import FCard from "./faq_card";

export default function FAQ() {
  return (
    <div className="text-2xl mx-4 md:mx-36">
      <h1 className="text-center font-bold">Frequently Asked Questions</h1>
      <div className="flex flex-col gap-2">
        <FCard />
        <FCard />
        <FCard />
        <FCard />
        <FCard />
      </div>
    </div>
  );
}
