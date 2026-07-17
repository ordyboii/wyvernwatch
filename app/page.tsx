import Link from "next/link";

const directions = [
  {
    slug: "hearth",
    name: "Hearth",
    tagline: "Cozy Playful",
  },
  {
    slug: "mist",
    name: "Mist",
    tagline: "Mist & Ember",
  },
  {
    slug: "atlas",
    name: "Atlas",
    tagline: "Cartographer's Parchment",
  },
  {
    slug: "crisp",
    name: "Crisp",
    tagline: "Clean Utility",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 px-6 py-16 dark:bg-zinc-900">
      <main className="w-full max-w-5xl">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Wyvernwatch Prototype Playground
          </h1>
          <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Clickable walk-throughs of features
          </p>
        </header>

        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            DragonMap MVP — initial 4 creative directions
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {directions.map((d) => (
              <Link
                key={d.slug}
                href={`/mvp/${d.slug}`}
                className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
              >
                <p className="font-semibold text-zinc-950 dark:text-zinc-50">
                  {d.name}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {d.tagline}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Future prototype collections slot in here as new sections */}
      </main>
    </div>
  );
}
