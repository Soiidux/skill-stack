import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between mx-auto w-full px-14 py-4 bg-white max-sm:px-4">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={44}
            height={46}
          ></Image>
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <NavItems />
        <Show when="signed-out">
          <div className="flex gap-4 text-gray-600">
            <SignInButton className="transition-all duration-200 ease-in-out hover:scale-105 hover:text-gray-800" />
          </div>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </nav>
  );
}
