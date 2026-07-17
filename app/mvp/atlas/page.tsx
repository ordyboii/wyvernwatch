import Link from "next/link";

export default function AtlasLanding() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_40%_25%,#f1e2bd_0%,#e6d2a0_45%,#d9c088_100%)] flex flex-col items-center justify-center px-6 py-16 text-[#4a3320] font-serif">
      <div className="w-full max-w-sm rounded-sm border-2 border-[#4a3320] bg-[#f1e2bd] p-8 text-center shadow-[0_0_0_4px_#e6d2a0,0_8px_24px_rgba(74,51,32,0.35)]">
        <div
          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#4a3320] text-3xl"
          aria-hidden
        >
          🧭
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">DragonMap</h1>
        <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#6b4a2e]">
          Cartographer&rsquo;s Atlas
        </p>
        <p className="mb-8 text-sm italic text-[#6b4a2e]">
          Chart the flock. Mark who has appeared, and who has vanished into
          the mist.
        </p>

        <Link
          href="/mvp/atlas/signin"
          className="block w-full rounded-sm border-2 border-[#4a3320] bg-[#4a3320] px-6 py-4 text-lg font-bold text-[#f1e2bd] transition hover:bg-[#3a2718]"
        >
          Create a room / Sign in
        </Link>

        <div className="my-6 flex items-center gap-3 text-[#8a6a45]">
          <div className="h-px flex-1 bg-[#8a6a45]/50" />
          <span className="text-xs uppercase tracking-widest">or</span>
          <div className="h-px flex-1 bg-[#8a6a45]/50" />
        </div>

        <Link
          href="/mvp/atlas/join"
          className="inline-block rounded-full border-2 border-[#4a3320] px-5 py-2 text-sm font-bold text-[#4a3320] hover:bg-[#4a3320] hover:text-[#f1e2bd] transition"
        >
          Join a room with a link or QR →
        </Link>
      </div>

      <Link
        href="/"
        className="mt-10 text-sm font-semibold text-[#6b4a2e] underline underline-offset-2 hover:text-[#4a3320]"
      >
        ← Back to prototypes
      </Link>
    </div>
  );
}
