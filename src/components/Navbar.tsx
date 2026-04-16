import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between mx-auto w-full px-14 py-4 bg-white max-sm:px-4">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={44} height={46}></Image>
        </div>
      </Link>
      <NavItems/>
    </nav>
  )
}