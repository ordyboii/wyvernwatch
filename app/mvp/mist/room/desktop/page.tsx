import Link from "next/link";
import FauxMap from "../../../_components/FauxMap";
import { roster, activeRoom } from "../../../_data";

export default function MistRoomDesktop() {
  const online = roster.filter((m) => m.state !== "offline");
  const offline = roster.filter((m) => m.state === "offline");

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0a0614]">
      {/* full-bleed map */}
      <FauxMap variant="mist" members={roster} className="h-full w-full" showFitControl={false} />

      {/* top-left title chip */}
      <div className="absolute left-6 top-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-md">
        <Link
          href="/mvp/mist/rooms"
          className="text-xs text-zinc-400 hover:text-zinc-200"
        >
          ← Rooms
        </Link>
        <span className="h-4 w-px bg-white/15" />
        <p className="text-sm font-semibold text-purple-100">
          {activeRoom.emoji} {activeRoom.name}
        </p>
      </div>

      {/* floating glassy roster card, top-right */}
      <div className="absolute right-6 top-6 w-72 rounded-2xl border border-white/10 bg-[#120a24]/70 p-4 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Roster
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-zinc-600">
            Online
          </p>
          {online.map((m) => (
            <div key={m.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base" aria-hidden>
                  {m.emoji}
                </span>
                <span className="text-sm text-zinc-100">
                  {m.name}
                  {m.isSelf && (
                    <span className="ml-1 text-[10px] text-[#f0a878]">
                      (you)
                    </span>
                  )}
                </span>
              </div>
              <span className="text-xs text-zinc-400">
                {m.state === "appear" && "🟢 Appear"}
                {m.state === "vanish" && `💨 ${m.lastSeen}`}
                {m.state === "resting" && `😴 ${m.lastSeen}`}
              </span>
            </div>
          ))}
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-600">
            Offline
          </p>
          {offline.map((m) => (
            <div key={m.id} className="flex items-center justify-between opacity-60">
              <div className="flex items-center gap-2">
                <span className="text-base" aria-hidden>
                  {m.emoji}
                </span>
                <span className="text-sm text-zinc-100">{m.name}</span>
              </div>
              <span className="text-xs text-zinc-400">⚪️ {m.lastSeen}</span>
            </div>
          ))}
        </div>
      </div>

      {/* bottom floating command bar */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#120a24]/80 px-3 py-2 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <Link
          href="/mvp/mist/room/invite"
          className="flex items-center gap-1.5 rounded-full border border-[#C2410C]/50 bg-[#C2410C]/90 px-4 py-2 text-xs font-semibold text-zinc-50 shadow-[0_0_16px_rgba(194,65,12,0.5)] transition hover:bg-[#C2410C]"
        >
          <span aria-hidden>➕</span> Invite
        </Link>
        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-100 transition hover:bg-white/10"
        >
          🎯 Fit everyone
        </button>
        <Link
          href="/mvp/mist/room"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-100 transition hover:bg-white/10"
        >
          📱 Mobile view
        </Link>
      </div>
    </div>
  );
}
