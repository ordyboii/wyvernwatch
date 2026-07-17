import Link from "next/link";
import FauxMap from "../../../_components/FauxMap";
import { activeRoom, presenceLabelPast, roster } from "../../../_data";

export default function CrispRoomDesktop() {
  const online = roster.filter((m) => m.state !== "offline");
  const offline = roster.filter((m) => m.state === "offline");

  return (
    <div className="flex h-screen flex-col bg-[#f5f6f8] text-zinc-900">
      {/* Minimal top toolbar */}
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-black/5 bg-white/80 px-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <Link
            href="/mvp/crisp/rooms"
            className="rounded-lg px-2 py-1 text-sm text-zinc-500 hover:bg-black/5"
          >
            ← Rooms
          </Link>
          <span className="h-4 w-px bg-black/10" />
          <span className="flex items-center gap-1.5 text-sm font-semibold">
            <span aria-hidden>{activeRoom.emoji}</span>
            {activeRoom.name}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <Link
            href="/mvp/crisp/room"
            className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-600 hover:bg-black/5"
            title="Mobile view"
          >
            📱 Mobile view
          </Link>
          <Link
            href="/mvp/crisp/room/invite"
            className="rounded-lg bg-[#6B3FA0] px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-[#6B3FA0]/30 hover:bg-[#5c3489]"
          >
            Invite
          </Link>
        </div>
      </header>

      {/* Full-width map with right-docked inspector */}
      <div className="relative flex-1">
        <FauxMap variant="crisp" members={roster} className="h-full" />

        {/* Collapsible right inspector panel — rendered open */}
        <aside className="absolute right-4 top-4 bottom-4 w-80 overflow-y-auto rounded-2xl border border-black/5 bg-white/70 shadow-xl shadow-black/10 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-black/5 px-4 py-3">
            <span className="text-sm font-semibold">Roster</span>
            <button
              type="button"
              aria-label="Collapse panel"
              className="flex h-6 w-6 items-center justify-center rounded-full text-zinc-400 hover:bg-black/5 hover:text-zinc-700"
            >
              ✕
            </button>
          </div>

          <div className="px-4 py-3">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-400">
              Online — {online.length}
            </p>
            <ul className="mb-4 space-y-2.5">
              {online.map((m) => (
                <li key={m.id} className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm">
                    <span aria-hidden>{m.emoji}</span>
                    <span className="font-medium">
                      {m.name}
                      {m.isSelf ? " (you)" : ""}
                    </span>
                  </span>
                  <span className="text-right text-xs text-zinc-500">
                    {presenceLabelPast(m.state)}
                    <br />
                    {m.lastSeen}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-400">
              Offline — {offline.length}
            </p>
            <ul className="space-y-2.5">
              {offline.map((m) => (
                <li
                  key={m.id}
                  className="flex items-center justify-between opacity-60"
                >
                  <span className="flex items-center gap-2 text-sm">
                    <span aria-hidden>{m.emoji}</span>
                    <span className="font-medium">{m.name}</span>
                  </span>
                  <span className="text-right text-xs text-zinc-500">
                    {m.lastSeen}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <Link
          href="/mvp/crisp/rooms"
          className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-zinc-700 shadow"
        >
          ← Back to rooms
        </Link>
      </div>
    </div>
  );
}
