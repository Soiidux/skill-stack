import { Section } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-cta text-white rounded-4xl px-7 py-10 flex flex-col items-center text-center gap-5 w-1/3 max-lg:w-1/2 max-md:w-full">
      <div className="bg-cta-gold rounded-4xl px-3 py-1.5 text-black">Start learning your way.</div>
      <h2 className="text-3xl font-bold">Build and Personalize Learning Companion</h2>
      <p>Pick a name, subject, voice & personality - and start learning through voice conversations that feel natural and fun.</p>
      <Image src="/images/cta.svg" alt="cta" width={362} height={232}></Image>
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12}></Image>
        <Link href="/companions/new">Build a New Companion</Link>
      </button>
    </section>
  )
}