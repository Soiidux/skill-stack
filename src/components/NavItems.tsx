"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type navItem = {
  label: string;
  href: string;
};

const navItems: navItem[] = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
  { label: "Sign In", href: "/sign-in" },
];

export default function NavItems() {
  const pathName = usePathname();
  return (
    <nav className="flex items-center gap-4">
      {navItems.map((navItem) => (
        <Link href={navItem.href} key={navItem.label} className={cn("transition-all duration-200 ease-in-out hover:scale-105",pathName === navItem.href? "font-semibold text-gray-800" : "text-gray-600")}>
          {navItem.label}
        </Link>
      ))}
    </nav>
  );
}