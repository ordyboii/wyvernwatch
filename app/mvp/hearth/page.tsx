import Link from "next/link";

export default function HearthLanding() {
  return (
    <div className="min-h-screen bg-[#FBF3E7] flex flex-col items-center justify-center px-6 py-16 text-[#3a2a1a]">
      <div className="w-full max-w-sm rounded-3xl border-4 border-[#3a2a1a] bg-white p-8 text-center shadow-[6px_6px_0_0_#3a2a1a]">
        <div className="text-6xl mb-4" aria-hidden>
          🐲
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-1">
          DragonMap
        </h1>
        <p className="mb-8 text-sm font-medium text-[#6b5744]">
          Know where your flock is, without spilling the whole map.
        </p>

        <Link
          href="/mvp/hearth/signin"
          className="block w-full rounded-2xl border-4 border-[#3a2a1a] bg-[#6B3FA0] px-6 py-4 text-lg font-extrabold text-white shadow-[4px_4px_0_0_#3a2a1a] transition active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          Create a room / Sign in
        </Link>

        <p className="mt-6 text-sm font-semibold text-[#6b5744]">
          Got a link or a QR from a friend?
        </p>
        <Link
          href="/mvp/hearth/join"
          className="mt-2 inline-block rounded-full border-2 border-[#C2410C] px-5 py-2 text-sm font-bold text-[#C2410C] hover:bg-[#C2410C] hover:text-white transition"
        >
          Join a room →
        </Link>
      </div>

      <Link
        href="/"
        className="mt-10 text-sm font-semibold text-[#6b5744] underline underline-offset-2 hover:text-[#3a2a1a]"
      >
        ← Back to prototypes
      </Link>
    </div>
  );
}
