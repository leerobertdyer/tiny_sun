"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type PropsDefinition = {
  links: string[];
};

export default function Nav({ links }: PropsDefinition) {
  const path = usePathname();

  return (
    <>
      <div
        className="
        flex 
        justify-between 
        p-4"
      >
        {links && (
          <div className="flex items-center gap-2 md:gap-6">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`}
                className={`${
                  path === (link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`)
                    ? " bg-tinyPink-dark rounded-xl p-2 text-white"
                    : "hover:bg-tinyPink-light rounded-xl p-2"
                }`}
              >
                {link}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
