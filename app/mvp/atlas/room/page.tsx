import Link from "next/link";
import PhoneFrame from "../../_components/PhoneFrame";
import FauxMap from "../../_components/FauxMap";
import { activeRoom, roster } from "../../_data";

export default function AtlasRoomMobile() {
  const online = roster.filter((m) => m.state !== "offline");
  const offline = roster.filter((m) => m.state === "offline");

  return (
    <div className="min-h-screen bg-[#d9c088] flex flex-col items-center justify-center gap-6 px-4 py-10 font-serif text-[#4a3320]">
      <PhoneFrame className="bg-[#f1e2bd] text-[#4a3320]">
        <div className="flex items-center justify-between border-b-2 border-[#4a3320]/30 px-4 py-2">
          <Link
            href="/mvp/atlas/rooms"
            className="text-lg leading-none"
            aria-label="Back to rooms"
          >
            ←
          </Link>
          <span className="flex items-center gap-1.5 text-sm font-bold">
            <span aria-hidden>{activeRoom.emoji}</span> {activeRoom.name}
          </span>
          <Link
            href="/mvp/atlas/room/invite"
            className="text-lg leading-none"
            aria-label="Invite"
          >
            🧧
          </Link>
        </div>

        <div className="relative flex-1">
          <FauxMap variant="atlas" members={roster} className="h-full" />

          <Link
            href="/mvp/atlas/room/desktop"
            className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full border border-[#4a3320] bg-[#f1e2bd]/90 px-3 py-1 text-[11px] font-bold shadow"
          >
            View desktop layout →
          </Link>

          {/* swipe-up drawer peek */}
          <div className="absolute bottom-0 left-0 right-0 rounded-t-2xl border-t-2 border-[#4a3320] bg-[#f1e2bd]/95 px-4 pb-3 pt-2 shadow-[0_-4px_12px_rgba(74,51,32,0.25)]">
            <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-[#4a3320]/40" />
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#6b4a2e]">
              The Roster
            </p>
            <ul className="flex flex-col gap-1.5 max-h-40 overflow-y-auto pr-1">
              {online.map((m) => (
                <li
                  key={m.id}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="flex items-center gap-2">
                    <span aria-hidden>{m.emoji}</span>
                    <span className="font-semibold">
                      {m.name}
                      {m.isSelf ? " (you)" : ""}
                    </span>
                  </span>
                  <span className="text-xs text-[#6b4a2e]">
                    {m.state === "appear" && "🟢 appeared"}
                    {m.state === "vanish" && `💨 ${m.lastSeen}`}
                    {m.state === "resting" && `😴 ${m.lastSeen}`}
                  </span>
                </li>
              ))}
              {offline.map((m) => (
                <li
                  key={m.id}
                  className="flex items-center justify-between text-sm opacity-60"
                >
                  <span className="flex items-center gap-2">
                    <span aria-hidden>{m.emoji}</span>
                    <span className="font-semibold">{m.name}</span>
                  </span>
                  <span className="text-xs">⚪️ {m.lastSeen}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PhoneFrame>

      <Link
        href="/mvp/atlas/rooms"
        className="text-sm font-semibold text-[#4a3320] underline underline-offset-2"
      >
        ← Back to my rooms
      </Link>
    </div>
  );
}
