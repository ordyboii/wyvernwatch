import Link from "next/link";

export default function HearthSignIn() {
  return (
    <div className="min-h-screen bg-[#FBF3E7] flex flex-col items-center justify-center px-6 py-16 text-[#3a2a1a]">
      <div className="w-full max-w-sm rounded-3xl border-4 border-[#3a2a1a] bg-white p-8 shadow-[6px_6px_0_0_#3a2a1a]">
        <div className="text-5xl mb-3 text-center" aria-hidden>
          🔥
        </div>
        <h1 className="text-2xl font-extrabold text-center mb-1">
          Welcome back, dragon
        </h1>
        <p className="mb-6 text-center text-sm font-medium text-[#6b5744]">
          Sign in to create or manage your rooms.
        </p>

        <div className="space-y-4">
          <label className="block">
            <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-[#6b5744]">
              Email
            </span>
            <input
              type="email"
              placeholder="you@dragonmap.app"
              readOnly
              className="w-full rounded-xl border-2 border-[#3a2a1a] bg-[#FBF3E7] px-4 py-3 text-sm font-medium outline-none"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-[#6b5744]">
              Password
            </span>
            <input
              type="password"
              placeholder="••••••••"
              readOnly
              value="hunter2fire"
              className="w-full rounded-xl border-2 border-[#3a2a1a] bg-[#FBF3E7] px-4 py-3 text-sm font-medium outline-none"
            />
          </label>
        </div>

        <Link
          href="/mvp/hearth/rooms"
          className="mt-6 block w-full rounded-2xl border-4 border-[#3a2a1a] bg-[#6B3FA0] px-6 py-4 text-center text-lg font-extrabold text-white shadow-[4px_4px_0_0_#3a2a1a] transition active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          Sign in
        </Link>

        <p className="mt-5 text-center text-sm font-medium text-[#6b5744]">
          New here?{" "}
          <Link
            href="/mvp/hearth/rooms"
            className="font-bold text-[#C2410C] underline underline-offset-2"
          >
            Create account
          </Link>{" "}
          — you&apos;ll land right in your rooms.
        </p>
      </div>

      <Link
        href="/mvp/hearth"
        className="mt-8 text-sm font-semibold text-[#6b5744] underline underline-offset-2 hover:text-[#3a2a1a]"
      >
        ← Back
      </Link>
    </div>
  );
}
