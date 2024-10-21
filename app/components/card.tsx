import { ReactNode } from "react";

export default function Card({
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
}) {
  return (
    <div className="transform ease-in-out duration-300 hover:scale-105 hover:cursor-pointer dark:border-white border-black border rounded-md h-44 p-1 md:rounded-lg lg:h-48 flex flex-col justify-around items-center">
      <div>{icon}</div>
      <div className="font-bold text-lg text-wrap">{title}</div>
      <p className="font-light">Read More...</p>
    </div>
  );
}
