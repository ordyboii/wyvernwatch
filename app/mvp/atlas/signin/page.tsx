import Link from "next/link";

export default function AtlasSignIn() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_40%_25%,#f1e2bd_0%,#e6d2a0_45%,#d9c088_100%)] flex flex-col items-center justify-center px-6 py-16 text-[#4a3320] font-serif">
      <div className="w-full max-w-sm rounded-sm border-2 border-[#4a3320] bg-[#f1e2bd] p-8 shadow-[0_0_0_4px_#e6d2a0,0_8px_24px_rgba(74,51,32,0.35)]">
        <p className="mb-1 text-center text-xs uppercase tracking-[0.2em] text-[#6b4a2e]">
          Cartographer&rsquo;s Ledger
        </p>
        <h1 className="mb-6 text-center text-2xl font-bold">Sign in</h1>

        <label className="mb-3 block text-sm font-semibold">
          Email
          <input
            type="email"
            readOnly
            placeholder="you@flock.example"
            className="mt-1 w-full rounded-sm border-2 border-[#4a3320]/60 bg-[#e6d2a0] px-3 py-2 text-sm text-[#4a3320] placeholder:text-[#8a6a45] focus:outline-none"
          />
        </label>

        <label className="mb-6 block text-sm font-semibold">
          Password
          <input
            type="password"
            readOnly
            placeholder="••••••••"
            className="mt-1 w-full rounded-sm border-2 border-[#4a3320]/60 bg-[#e6d2a0] px-3 py-2 text-sm text-[#4a3320] placeholder:text-[#8a6a45] focus:outline-none"
          />
        </label>

        <Link
          href="/mvp/atlas/rooms"
          className="block w-full rounded-sm border-2 border-[#4a3320] bg-[#4a3320] px-6 py-3 text-center text-base font-bold text-[#f1e2bd] transition hover:bg-[#3a2718]"
        >
          Sign in
        </Link>

        <p className="mt-5 text-center text-sm text-[#6b4a2e]">
          New to the atlas?{" "}
          <Link
            href="/mvp/atlas/rooms"
            className="font-semibold underline underline-offset-2 hover:text-[#4a3320]"
          >
            Create an account
          </Link>{" "}
          &mdash; a room can only be created once you&rsquo;ve signed in.
        </p>
      </div>

      <Link
        href="/mvp/atlas"
        className="mt-8 text-sm font-semibold text-[#6b4a2e] underline underline-offset-2 hover:text-[#4a3320]"
      >
        ← Back
      </Link>
    </div>
  );
}
