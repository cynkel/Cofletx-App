import clsx from "clsx";

export default function FilterButton({
  filter,
  active,
  current,
}: {
  filter: string;
  active: boolean;
  current: ()=>void;
}) {
  return (
    <button
      onClick={() => current()}
      className="dark:hover:text-white text-unclicked relative py-2 px-6 flex justify-center items-center hover:text-black transition-all duration-200 ease-in-out"
    >
      <p className={clsx({ "text-black font-bold z-10": active === true })}>
        {filter}
      </p>
      <div
        className={clsx({
          hidden: active === false,
          "absolute w-full h-full bg-yellow rounded-md box-border":
            active === true,
        })}
      ></div>
    </button>
  );
}
