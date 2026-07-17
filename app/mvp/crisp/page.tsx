import Link from "next/link";

export default function CrispLanding() {
  return (
    <div className="min-h-screen bg-[#f5f6f8] flex flex-col items-center justify-center px-6 py-16 text-zinc-900">
      <div className="w-full max-w-sm rounded-3xl border border-black/5 bg-white/70 p-8 text-center shadow-xl shadow-black/5 backdrop-blur-xl">
        <div
          className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6B3FA0]/10 text-3xl"
          aria-hidden
        >
          📍
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">DragonMap</h1>
        <p className="mt-1 mb-8 text-sm text-zinc-500">
          See who&apos;s nearby. Nothing more, nothing less.
        </p>

        <Link
          href="/mvp/crisp/signin"
          className="block w-full rounded-xl bg-[#6B3FA0] px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-[#6B3FA0]/30 transition hover:bg-[#5c3489]"
        >
          Create a room / Sign in
        </Link>

        <div className="mt-4 flex items-center gap-3 text-xs text-zinc-400">
          <span className="h-px flex-1 bg-black/10" />
          or
          <span className="h-px flex-1 bg-black/10" />
        </div>

        <Link
          href="/mvp/crisp/join"
          className="mt-4 block w-full rounded-xl border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
        >
          Join a room
        </Link>
      </div>

      <Link
        href="/"
        className="mt-10 text-sm text-zinc-500 underline underline-offset-4 hover:text-zinc-800"
      >
        ← Back to prototypes
      </Link>
    </div>
  );
}
