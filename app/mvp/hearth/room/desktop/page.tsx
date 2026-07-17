import Link from "next/link";
import FauxMap from "../../../_components/FauxMap";
import { activeRoom, presenceLabel, roster } from "../../../_data";

export default function HearthRoomDesktop() {
  const online = roster.filter((m) => m.state !== "offline");
  const offline = roster.filter((m) => m.state === "offline");

  return (
    <div className="flex h-screen bg-[#FBF3E7] text-[#3a2a1a]">
      {/* Classic left sidebar nav */}
      <aside className="flex w-80 shrink-0 flex-col border-r-4 border-[#3a2a1a] bg-white">
        <div className="flex items-center justify-between border-b-4 border-[#3a2a1a] px-5 py-4">
          <Link
            href="/mvp/hearth/rooms"
            className="text-sm font-bold text-[#6B3FA0]"
          >
            ← Rooms
          </Link>
          <Link
            href="/mvp/hearth/room"
            className="text-sm font-bold text-[#6B3FA0]"
          >
            Mobile view
          </Link>
        </div>

        <div className="border-b-4 border-[#3a2a1a] px-5 py-4">
          <h1 className="flex items-center gap-2 text-2xl font-extrabold">
            <span aria-hidden>{activeRoom.emoji}</span>
            {activeRoom.name}
          </h1>
          <p className="text-xs font-medium text-[#6b5744]">
            {activeRoom.memberCount} dragons in this room
          </p>
          <Link
            href="/mvp/hearth/room/invite"
            className="mt-3 inline-block rounded-2xl border-4 border-[#3a2a1a] bg-[#C2410C] px-4 py-2 text-sm font-extrabold text-white shadow-[3px_3px_0_0_#3a2a1a]"
          >
            Invite dragons
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#6b5744]">
            Online · {online.length}
          </p>
          <ul className="mb-6 space-y-3">
            {online.map((m) => (
              <li
                key={m.id}
                className="rounded-2xl border-4 border-[#3a2a1a] bg-[#FBF3E7] px-4 py-3 shadow-[3px_3px_0_0_#3a2a1a]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-extrabold">
                    <span className="text-xl" aria-hidden>
                      {m.emoji}
                    </span>
                    {m.name}
                    {m.isSelf && (
                      <span className="rounded-full bg-[#6B3FA0] px-2 py-0.5 text-[10px] font-extrabold text-white">
                        You
                      </span>
                    )}
                  </span>
                </div>
                <p className="mt-1 text-xs font-semibold text-[#6b5744]">
                  {presenceLabel(m.state)} · {m.lastSeen}
                </p>
              </li>
            ))}
          </ul>

          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#6b5744]">
            Offline · {offline.length}
          </p>
          <ul className="space-y-3">
            {offline.map((m) => (
              <li
                key={m.id}
                className="rounded-2xl border-4 border-[#3a2a1a]/40 bg-[#FBF3E7]/60 px-4 py-3 opacity-70"
              >
                <span className="flex items-center gap-2 font-extrabold">
                  <span className="text-xl" aria-hidden>
                    {m.emoji}
                  </span>
                  {m.name}
                </span>
                <p className="mt-1 text-xs font-semibold text-[#6b5744]">
                  {presenceLabel(m.state)} · {m.lastSeen}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Large map fills the rest */}
      <main className="relative flex-1">
        <FauxMap variant="hearth" members={roster} className="h-full" />
      </main>
    </div>
  );
}
