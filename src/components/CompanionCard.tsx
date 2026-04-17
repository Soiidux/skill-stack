import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

export default function CompanionCard({ id, name, topic, subject, duration, color }: CompanionCardProps) {
  return (
    <article className={"flex flex-col justify-center gap-2 rounded-4xl border border-black p-4 w-full min-lg:max-w-[410px]"} style={{backgroundColor: color}}>
      <div className="flex justify-between items-center">
        <div className="bg-black text-white rounded-4xl text-sm px-2 py-1 capitalize">{subject}</div>
        <button className="p-2 bg-black rounded-4xl flex items-center h-full aspect-square cursor-pointer">
          <Image src="/icons/bookmark.svg" alt="bookmark" height={15} width={12.5}></Image>
        </button>
      </div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">Topic: {topic}</p>
      <div className="flex items-center gap-1.5">
        <Image src="icons/clock.svg" alt="duration" height={15} width={15}/>
        <span className="text-sm">Duration: {duration} minutes</span>
      </div>
      <Link href={`/companions/${id}`} className="w-full">
        <button className="mt-2 w-full bg-black text-white rounded-4xl py-2 text-sm">Launch Lesson</button>
      </Link>
    </article>
  )
}