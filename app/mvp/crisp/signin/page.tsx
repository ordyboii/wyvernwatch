import Link from "next/link";

export default function CrispSignIn() {
  return (
    <div className="min-h-screen bg-[#f5f6f8] flex flex-col items-center justify-center px-6 py-16 text-zinc-900">
      <div className="w-full max-w-sm rounded-3xl border border-black/5 bg-white/70 p-8 shadow-xl shadow-black/5 backdrop-blur-xl">
        <h1 className="text-xl font-semibold tracking-tight text-center">
          Sign in
        </h1>
        <p className="mt-1 mb-6 text-center text-sm text-zinc-500">
          Room creation requires an account. Joining doesn&apos;t.
        </p>

        <div className="space-y-3">
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-zinc-500">
              Email
            </span>
            <input
              type="email"
              placeholder="you@dragonmap.app"
              readOnly
              className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-zinc-800 outline-none focus:border-[#6B3FA0]"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-zinc-500">
              Password
            </span>
            <input
              type="password"
              readOnly
              value="hunter2fire"
              className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-zinc-800 outline-none focus:border-[#6B3FA0]"
            />
          </label>
        </div>

        <Link
          href="/mvp/crisp/rooms"
          className="mt-6 block w-full rounded-xl bg-[#6B3FA0] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm shadow-[#6B3FA0]/30 transition hover:bg-[#5c3489]"
        >
          Sign in
        </Link>

        <p className="mt-4 text-center text-xs text-zinc-500">
          No account yet?{" "}
          <Link
            href="/mvp/crisp/rooms"
            className="font-medium text-[#6B3FA0] underline underline-offset-2"
          >
            Create one
          </Link>{" "}
          — it takes a few seconds.
        </p>
      </div>

      <Link
        href="/mvp/crisp"
        className="mt-8 text-sm text-zinc-500 underline underline-offset-4 hover:text-zinc-800"
      >
        ← Back
      </Link>
    </div>
  );
}
