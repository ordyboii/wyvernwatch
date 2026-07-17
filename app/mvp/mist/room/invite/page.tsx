import Link from "next/link";
import { activeRoom } from "../../../_data";

export default function MistInvite() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a0614] px-6 py-16 text-zinc-100">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(45,27,78,0.6) 0%, rgba(10,6,20,0) 55%)",
        }}
        aria-hidden
      />

      <main className="relative z-10 w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.45)]">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Invite to {activeRoom.emoji} {activeRoom.name}
        </p>
        <h1 className="mt-1 text-xl font-semibold text-purple-100">
          Bring another dragon in
        </h1>

        {/* fake QR placeholder */}
        <div className="mx-auto mt-6 grid h-40 w-40 grid-cols-6 grid-rows-6 gap-1 rounded-2xl border border-[#C2410C]/50 bg-black/40 p-3 shadow-[0_0_24px_rgba(194,65,12,0.45)]">
          {Array.from({ length: 36 }).map((_, i) => (
            <span
              key={i}
              className={`rounded-sm ${
                (i * 7 + (i % 5)) % 3 === 0 ? "bg-[#f0a878]" : "bg-white/10"
              }`}
              aria-hidden
            />
          ))}
        </div>
        <p className="mt-2 text-xs text-zinc-500">Scan the QR code to join</p>

        <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-2.5">
          <span className="flex-1 truncate text-left text-xs text-zinc-300">
            dragonmap.app/join/italy-trip-x7q2
          </span>
          <button
            type="button"
            className="rounded-full border border-[#C2410C]/50 bg-[#C2410C]/90 px-3 py-1.5 text-xs font-semibold text-zinc-50 shadow-[0_0_12px_rgba(194,65,12,0.5)] transition hover:bg-[#C2410C]"
          >
            Copy
          </button>
        </div>

        <p className="mt-4 text-[11px] text-zinc-500">
          Link expires in 24h for everyone&rsquo;s safety.
        </p>

        <Link
          href="/mvp/mist/room"
          className="mt-8 block text-xs text-zinc-400 underline decoration-zinc-700 underline-offset-4 hover:text-zinc-200"
        >
          ← Back to room
        </Link>
      </main>
    </div>
  );
}
