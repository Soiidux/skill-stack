import CompanionCard from '@/components/CompanionCard'
import React from 'react'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessions = await getRecentSessions(10);
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='flex gap-4 justify-between items-start w-full max-lg:flex-col-reverse max-lg:items-center'>
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            id={companion.id}
            name={companion.name}
            topic={companion.topic}
            subject={companion.subject}
            duration={companion.duration}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
      <section className={`flex gap-4 justify-between items-start w-full max-lg:flex-col-reverse max-lg:items-center ${recentSessions.length === 0 ? 'justify-center' : ''}`}>
        <CompanionsList
          title="Recently Completed Sessions"
          companions={recentSessions}
          classNames={`w-2/3 max-lg:w-full ${recentSessions.length === 0 ? 'hidden' : ''}`}
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page