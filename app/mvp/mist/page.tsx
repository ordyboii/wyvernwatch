import Link from "next/link";

export default function MistLanding() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a0614] px-6 py-16 text-zinc-100">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(45,27,78,0.65) 0%, rgba(10,6,20,0) 55%), radial-gradient(circle at 75% 70%, rgba(194,65,12,0.18) 0%, rgba(10,6,20,0) 50%)",
        }}
        aria-hidden
      />

      <main className="relative z-10 w-full max-w-sm text-center">
        <div className="mb-8 flex flex-col items-center gap-3">
          <span className="text-5xl drop-shadow-[0_0_20px_rgba(194,65,12,0.55)]" aria-hidden>
            🐉
          </span>
          <h1 className="text-3xl font-semibold tracking-tight text-purple-100">
            DragonMap
          </h1>
          <p className="text-sm text-zinc-400">
            A misty thread between dragons. Appear, vanish, and find each
            other again.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/mvp/mist/signin"
            className="rounded-full border border-[#C2410C]/60 bg-[#C2410C]/90 px-6 py-3 text-sm font-semibold text-zinc-50 shadow-[0_0_20px_rgba(194,65,12,0.5)] transition hover:bg-[#C2410C]"
          >
            Create a room / Sign in
          </Link>
          <Link
            href="/mvp/mist/join"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-100 backdrop-blur-md transition hover:bg-white/10"
          >
            Join a room
          </Link>
        </div>

        <p className="mt-10 text-xs text-zinc-500">
          Room creation requires signing in first.
        </p>
      </main>

      <Link
        href="/"
        className="relative z-10 mt-12 text-xs text-zinc-500 underline decoration-zinc-700 underline-offset-4 hover:text-zinc-300"
      >
        ← Back to prototypes
      </Link>
    </div>
  );
}
