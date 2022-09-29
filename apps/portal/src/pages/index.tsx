import type { NextPage } from 'next';
import Head from 'next/head';
import { CounterButton } from '@tih/ui';

import { trpc } from '~/utils/trpc';

const Home: NextPage = () => {
  const hello = trpc.useQuery(['example.hello', { text: 'from tRPC!' }]);
  const getAll = trpc.useQuery(['example.getAll']);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta content="Generated by create-t3-app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Create <span className="text-purple-300">T3</span> App
        </h1>
        <CounterButton />
        <p className="text-2xl text-gray-700">This stack uses:</p>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
          <TechnologyCard
            description="The React framework for production"
            documentation="https://nextjs.org/"
            name="NextJS"
          />
          <TechnologyCard
            description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
            documentation="https://www.typescriptlang.org/"
            name="TypeScript"
          />
          <TechnologyCard
            description="Rapidly build modern websites without ever leaving your HTML"
            documentation="https://tailwindcss.com/"
            name="TailwindCSS"
          />
          <TechnologyCard
            description="End-to-end typesafe APIs made easy"
            documentation="https://trpc.io/"
            name="tRPC"
          />
          <TechnologyCard
            description="Authentication for Next.js"
            documentation="https://next-auth.js.org/"
            name="Next-Auth"
          />
          <TechnologyCard
            description="Build data-driven JavaScript & TypeScript apps in less time"
            documentation="https://www.prisma.io/docs/"
            name="Prisma"
          />
        </div>
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
        <pre className="w-1/2">{JSON.stringify(getAll.data, null, 2)}</pre>
      </main>
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  description: string;
  documentation: string;
  name: string;
};

function TechnologyCard({
  name,
  description,
  documentation,
}: TechnologyCardProps) {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        href={documentation}
        rel="noreferrer"
        target="_blank">
        Documentation
      </a>
    </section>
  );
}