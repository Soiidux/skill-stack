import { cn, getSubjectColor } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface CompanionsListProps {
  title: string;
  companions?: Companion[]; 
  classNames: string
}

export default function CompanionsList({title, companions, classNames}: CompanionsListProps) {
  return (
    <article className={cn(classNames,"rounded-4xl border border-black px-7 pt-7 pb-10 max-lg:w-full bg-white")}>
      <h2 className="font-bold text-3xl">Recent Sessions</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg width-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(({id,subject,name,topic,duration}) => (
            <TableRow key={id}>
              <TableCell>
                  <Link href={`/companions/${id}`}>
                    <div className="flex items-center gap-2">
                      <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{backgroundColor: getSubjectColor(subject)}}>
                        <Image src={`/icons/${subject}.svg`} alt={subject} height={35} width={35}></Image>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-bold text-2xl">
                          {name}
                        </p>
                        <p className="text-lg">
                          {topic}
                        </p>
                      </div>
                    </div>
                </Link>
              </TableCell>
              <TableCell>
                  <div className=" bg-black text-white rounded-4xl text-sm w-fit px-2 py-1 capitalize max-md:hidden">
                    {subject}
                  </div>
                  <div className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden" style={{backgroundColor: getSubjectColor(subject)}}>
                    <Image
                      src={`/icons/${subject}.svg`}
                      alt={subject}
                      width={18}
                      height={18}
                    />
                  </div>
              </TableCell>
              <TableCell>
                <div className="gap-2 w-full">
                  <p className="text-2xl">
                    {duration} {' '}
                    <span className="max-md:hidden">mins</span>
                  </p>
                  <Image src="/icons/clock.svg" alt="minutes" width={14} height={14} className="md:hidden" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  )
}