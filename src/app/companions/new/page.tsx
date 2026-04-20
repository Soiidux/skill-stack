import { auth } from "@clerk/nextjs/server";

import CompanionForm from '@/components/CompanionForm'
import { redirect } from "next/navigation";

export default async function NewCompanion() {
  
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');
  return <div>
    <main className='min-lg:w-1/3 min-md:w-2/3 items-center justify-center'>
      <h1>Companion Builder</h1>
      <CompanionForm />
    </main>
  </div>
}