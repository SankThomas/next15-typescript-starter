import React from "react";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="text-3xl font-bold">
        NextJs 15 TypeScript Starter with ShadCN, TailwindCSS and Prettier
        Plugin For TailwindCSS
      </h1>

      <div className="my-6">
        <p className="text-sm leading-6 text-neutral-600">
          This template uses the{" "}
          <code className="rounded-lg bg-neutral-200 px-2 py-0.5 font-semibold">
            src
          </code>{" "}
          folder and the App router. This template exists because I am learning
          TypeScript and I needed a repository that is easy to clone, that has
          all the dependencies I usually use in my projects.
        </p>
      </div>

      <h2 className="mb-4 text-lg font-bold leading-6 text-neutral-600">
        Why did I choose these?
      </h2>

      <ul className="space-y-4 text-sm leading-6 text-neutral-600">
        <li>
          ShadCN: An amazing component library{" "}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-blue-500 underline"
          >
            https://ui.shadcn.com
          </a>
          .
        </li>
        <li>
          Prettier Plugin for TailwindCSS sorts Tailwind classes according to an
          order agreed upon at Tailwind Labs:{" "}
          <a
            href="https://github.com/tailwindlabs/prettier-plugin-tailwindcss"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-blue-500 underline"
          >
            https://github.com/tailwindlabs/prettier-plugin-tailwindcss
          </a>
        </li>
        <li>
          TypeScript, because I'm learning TypeScript as more and more projects
          that I love now use TypeScript as opposed to JavaScript.
        </li>
        <li>
          The default font is set to Geist Sans in `globals.css` - the current
          default font in NextJs 15.
        </li>
      </ul>
      <small className="mt-4 block text-center">
        <a
          href="https://youtube.com/@tsbsankara"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-blue-500 underline"
        >
          Find me here
        </a>
      </small>
    </div>
  );
}
