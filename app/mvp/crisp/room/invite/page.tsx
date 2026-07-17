import Link from "next/link";
import { activeRoom } from "../../../_data";

export default function CrispInvite() {
  return (
    <div className="relative min-h-screen bg-[#f5f6f8] text-zinc-900">
      {/* Backdrop suggesting a modal over the room */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      <div className="relative flex min-h-screen items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm rounded-3xl border border-black/5 bg-white/90 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="mb-5 flex items-center justify-between">
            <h1 className="text-lg font-semibold tracking-tight">
              Invite to {activeRoom.name}
            </h1>
            <Link
              href="/mvp/crisp/room"
              aria-label="Close"
              className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-400 hover:bg-black/5 hover:text-zinc-700"
            >
              ✕
            </Link>
          </div>

          <div className="mx-auto mb-5 flex h-40 w-40 items-center justify-center rounded-2xl border border-black/10 bg-white">
            <div
              className="grid h-28 w-28 grid-cols-5 grid-rows-5 gap-1"
              aria-label="QR code placeholder"
            >
              {Array.from({ length: 25 }).map((_, i) => (
                <span
                  key={i}
                  className={
                    [3, 4, 5, 8, 11, 12, 14, 17, 19, 20, 22].includes(i)
                      ? "rounded-[2px] bg-zinc-900"
                      : "rounded-[2px] bg-transparent"
                  }
                />
              ))}
            </div>
          </div>

          <label className="mb-1.5 block text-xs font-medium text-zinc-500">
            Room link
          </label>
          <div className="mb-2 flex items-center gap-2">
            <input
              readOnly
              value={`dragonmap.app/join/${activeRoom.id}`}
              className="flex-1 rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-zinc-700 outline-none"
            />
            <button
              type="button"
              className="rounded-lg bg-[#6B3FA0] px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#6B3FA0]/30 hover:bg-[#5c3489]"
            >
              Copy
            </button>
          </div>

          <p className="mb-6 text-xs text-zinc-500">
            Expires in 24h. Anyone with this link or QR code can join.
          </p>

          <Link
            href="/mvp/crisp/room"
            className="block w-full rounded-xl border border-black/10 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
          >
            Back to room
          </Link>
        </div>
      </div>
    </div>
  );
}
