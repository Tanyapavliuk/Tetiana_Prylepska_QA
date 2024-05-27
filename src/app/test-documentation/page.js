"use client";
import { SectionTitle } from "@/components/base/SectionTitle";
import Link from "next/link";
import Iframe from "react-iframe";

export default function Docunentation() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between pt-24 xs:pt-32 pb-12'>
      <section className='container flex flex-col'>
        <SectionTitle isLine={false} className='max-md:text-2xl'>
          Test Documentation
        </SectionTitle>
        <p className='text-lg mb-3'>Table of Contents</p>
        <ul className='mb-10 flex flex-col gap-3 list-disc list-inside'>
          <li className='underline decoration-green underline-offset-4 hover:decoration-green-dark hover:text-green'>
            <Link href='/test-documentation/#testPlan'>Test plan</Link>
          </li>
          <li className='underline decoration-green underline-offset-4 hover:decoration-green-dark hover:text-green'>
            <Link href='/test-documentation/#testSuite'>Test suite</Link>
          </li>
          <li className='underline decoration-green underline-offset-4 hover:decoration-green-dark hover:text-green'>
            <Link href='/test-documentation/#checklist'>Checklist</Link>
          </li>
          <li className='underline decoration-green underline-offset-4 hover:decoration-green-dark hover:text-green'>
            <Link href='/test-documentation/#bugReport'>Bug Report</Link>
          </li>
          <li className='underline decoration-green underline-offset-4 hover:decoration-green-dark hover:text-green'>
            <Link href='/test-documentation/#decisionTable'>
              Decision Table
            </Link>
          </li>
        </ul>
        <div className='flex flex-col gap-10'>
          <Iframe
            url='/doc/TestPlan.pdf'
            id='testPlan'
            className='w-full h-[750px]'
            display='block'
            position='relative'
          />
          <Iframe
            url='/doc/ContactForm_test_suite.pdf'
            id='testSuite'
            className='w-full h-[750px]'
            display='block'
            position='relative'
          />
          <Iframe
            url='/doc/SkillsSection.pdf'
            id='testPlan'
            className='w-full h-[750px]'
            display='block'
            position='relative'
          />
          <Iframe
            url='/doc/Checklist.pdf'
            id='checklist'
            className='w-full h-[750px]'
            display='block'
            position='relative'
          />
          <Iframe
            url='/doc/BugReport.pdf'
            id='bugReport'
            className='w-full h-[750px]'
            display='block'
            position='relative'
          />
          <Iframe
            url='/doc/DesTabl.pdf'
            id='decisionTable'
            className='w-full h-[750px]'
            display='block'
            position='relative'
          />
        </div>
      </section>
    </main>
  );
}
