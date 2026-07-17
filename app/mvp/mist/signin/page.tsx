import Link from "next/link";

export default function MistSignIn() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a0614] px-6 py-16 text-zinc-100">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 15%, rgba(45,27,78,0.6) 0%, rgba(10,6,20,0) 55%)",
        }}
        aria-hidden
      />

      <main className="relative z-10 w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.4)]">
        <h1 className="text-xl font-semibold text-purple-100">
          Sign in to DragonMap
        </h1>
        <p className="mt-1 text-sm text-zinc-400">
          Creating a room requires an account.
        </p>

        <form className="mt-6 flex flex-col gap-4">
          <label className="flex flex-col gap-1 text-xs font-medium text-zinc-400">
            Email
            <input
              type="email"
              placeholder="you@dragonmap.app"
              className="rounded-xl border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-[#C2410C]/60"
              readOnly
            />
          </label>
          <label className="flex flex-col gap-1 text-xs font-medium text-zinc-400">
            Password
            <input
              type="password"
              placeholder="••••••••"
              className="rounded-xl border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-[#C2410C]/60"
              readOnly
            />
          </label>

          <Link
            href="/mvp/mist/rooms"
            className="mt-2 rounded-full border border-[#C2410C]/60 bg-[#C2410C]/90 px-6 py-3 text-center text-sm font-semibold text-zinc-50 shadow-[0_0_20px_rgba(194,65,12,0.5)] transition hover:bg-[#C2410C]"
          >
            Sign in
          </Link>
        </form>

        <p className="mt-6 text-center text-xs text-zinc-500">
          New here?{" "}
          <span className="cursor-default text-purple-200 underline decoration-dotted underline-offset-4">
            Create account
          </span>{" "}
          — same form, first visit.
        </p>
      </main>

      <Link
        href="/mvp/mist"
        className="relative z-10 mt-8 text-xs text-zinc-500 underline decoration-zinc-700 underline-offset-4 hover:text-zinc-300"
      >
        ← Back
      </Link>
    </div>
  );
}
