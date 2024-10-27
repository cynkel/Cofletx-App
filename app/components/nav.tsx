"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ page, route }: { page: string; route: string }) {
  const pathname = usePathname();
  return (
    <Link
      href={route}
      className={clsx(
        "bg-no-repeat hover:text-yellow hover:decoration-purple-950 hover:underline hover:underline-offset-8 hover:decoration-2",
        {
          "text-yellow underline underline-offset-8 decoration-2 decoration-purple-950":
            pathname === route,
        },
      )}
    >
      {page}
    </Link>
  );
}
