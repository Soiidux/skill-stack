import CompanionCard from '@/components/CompanionCard'
import React from 'react'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='flex gap-4 justify-between items-start w-full max-lg:flex-col-reverse max-lg:items-center'>
        <CompanionCard
          id="123"
          name="Neura the Brainly Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Countsy the Number Wizards"
          topic="Derivaties and Integrals"
          subject="Math"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="Language"
          subject="English Literature"
          duration={30}
          color="#BDE7FF"
        />
      </section>
      <section className="flex gap-4 justify-between items-start w-full max-lg:flex-col-reverse max-lg:items-center">
        <CompanionsList
          title="Recently Completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page