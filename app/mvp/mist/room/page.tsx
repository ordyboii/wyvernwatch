import Link from "next/link";
import PhoneFrame from "../../_components/PhoneFrame";
import FauxMap from "../../_components/FauxMap";
import { roster, activeRoom } from "../../_data";

export default function MistRoomMobile() {
  const online = roster.filter((m) => m.state !== "offline");
  const offline = roster.filter((m) => m.state === "offline");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#0a0614] px-6 py-10 text-zinc-100">
      <PhoneFrame
        frameClassName="border-black"
        className="bg-[#0a0614] text-zinc-100"
      >
        <div className="flex items-center justify-between px-4 pb-2">
          <Link
            href="/mvp/mist/rooms"
            className="text-xs text-zinc-400 hover:text-zinc-200"
          >
            ← Rooms
          </Link>
          <p className="text-sm font-semibold text-purple-100">
            {activeRoom.emoji} {activeRoom.name}
          </p>
          <Link
            href="/mvp/mist/room/invite"
            className="text-xs text-[#f0a878] hover:text-[#ffb98a]"
          >
            Invite
          </Link>
        </div>

        <div className="relative flex-1">
          <FauxMap variant="mist" members={roster} className="h-full" />

          {/* swipe-up drawer peek */}
          <div className="absolute inset-x-0 bottom-0 rounded-t-3xl border-t border-white/10 bg-[#120a24]/90 backdrop-blur-md px-4 pt-2 pb-5 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
            <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-white/20" />
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
              Roster
            </p>
            <div className="flex max-h-40 flex-col gap-2 overflow-y-auto pr-1">
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
                  <span className="text-xs text-zinc-400">
                    ⚪️ {m.lastSeen}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PhoneFrame>

      <Link
        href="/mvp/mist/room/desktop"
        className="text-xs text-zinc-400 underline decoration-zinc-700 underline-offset-4 hover:text-zinc-200"
      >
        View desktop layout →
      </Link>
    </div>
  );
}
