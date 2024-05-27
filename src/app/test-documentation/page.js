import { SectionTitle } from "@/components/base/SectionTitle";
import Link from "next/link";

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
            <Link href='/test-documentation/#decisionTable'>
              Decision Table
            </Link>
          </li>
        </ul>
        <div className='flex flex-col gap-10'>
          <iframe
            id='testPlan'
            src='https://drive.google.com/file/d/11eC5f9SKfHn6054cg5oASYJYmthEEk6f/preview'
            width='100%'
            height='750'
            allow='autoplay'
            className="max-xs:h-96"
          ></iframe>
          <iframe
            id='testSuite'
            src='https://drive.google.com/file/d/1hll97B2XunMCOhHMj1urXFrG_YA4f42W/preview'
            width='100%'
            height='750'
            allow='autoplay'
            className="max-xs:h-96"
          ></iframe>
          <iframe
            src='https://drive.google.com/file/d/1GPD8j9CSHubBR3tECKWZ4phg-DWtuG88/preview'
            width='100%'
            height='750'
            allow='autoplay'
            className="max-xs:h-96"
          ></iframe>
          <iframe
            id='checklist'
            src='https://drive.google.com/file/d/1byhR3skYgklNHJ5VLQ4oDpfe_LSBfkzi/preview'
            width='100%'
            height='750'
            allow='autoplay'
            className="max-xs:h-96"
          ></iframe>
          <iframe
            id='decisionTable'
            src='https://drive.google.com/file/d/1TZw9utQuXns5LDfSlGlo-U7jmygLPdxV/preview'
            width='100%'
            height='750'
            className="max-xs:h-64"
            allow='autoplay'
          ></iframe>
        </div>
      </section>
    </main>
  );
}
