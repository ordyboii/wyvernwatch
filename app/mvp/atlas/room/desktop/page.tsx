import Link from "next/link";
import FauxMap from "../../../_components/FauxMap";
import { activeRoom, roster } from "../../../_data";

export default function AtlasRoomDesktop() {
  const online = roster.filter((m) => m.state !== "offline");
  const offline = roster.filter((m) => m.state === "offline");

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_40%_25%,#f1e2bd_0%,#e6d2a0_45%,#d9c088_100%)] font-serif text-[#4a3320]">
      <header className="flex items-center justify-between border-b-2 border-[#4a3320]/30 px-8 py-4">
        <Link
          href="/mvp/atlas/rooms"
          className="text-sm font-semibold underline underline-offset-2 hover:text-[#3a2718]"
        >
          ← My Rooms
        </Link>
        <span className="flex items-center gap-2 text-lg font-bold">
          <span aria-hidden>{activeRoom.emoji}</span> {activeRoom.name}
        </span>
        <Link
          href="/mvp/atlas/room"
          className="text-sm font-semibold underline underline-offset-2 hover:text-[#3a2718]"
        >
          Mobile view →
        </Link>
      </header>

      <div className="grid grid-cols-[260px_1fr_260px] gap-8 px-8 py-10">
        {/* LEFT RAIL: party ledger */}
        <aside className="rounded-sm border-2 border-[#4a3320] bg-[#f1e2bd] p-5 shadow-[3px_3px_0_0_#d9c088] self-start">
          <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#6b4a2e]">
            Manifest
          </p>
          <h2 className="mb-4 text-lg font-bold border-b border-[#4a3320]/40 pb-2">
            Party Ledger
          </h2>

          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#6b4a2e]">
            Appeared &amp; nearby
          </p>
          <ul className="mb-5 flex flex-col gap-2 border-l-2 border-[#4a3320]/30 pl-3">
            {online.map((m) => (
              <li key={m.id} className="text-sm leading-tight">
                <span className="font-semibold">
                  <span className="mr-1" aria-hidden>
                    {m.emoji}
                  </span>
                  {m.name}
                  {m.isSelf ? " (you)" : ""}
                </span>
                <span className="block text-xs italic text-[#6b4a2e]">
                  {m.state === "appear" && "🟢 appeared"}
                  {m.state === "vanish" && `💨 ${m.lastSeen}`}
                  {m.state === "resting" && `😴 ${m.lastSeen}`}
                </span>
              </li>
            ))}
          </ul>

          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#6b4a2e]">
            Offline
          </p>
          <ul className="flex flex-col gap-2 border-l-2 border-[#4a3320]/20 pl-3 opacity-60">
            {offline.map((m) => (
              <li key={m.id} className="text-sm leading-tight">
                <span className="font-semibold">
                  <span className="mr-1" aria-hidden>
                    {m.emoji}
                  </span>
                  {m.name}
                </span>
                <span className="block text-xs italic">
                  ⚪️ {m.lastSeen}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        {/* CENTER: framed map table */}
        <main className="flex items-center justify-center">
          <div className="relative w-full max-w-3xl rounded-sm border-[6px] border-[#4a3320] bg-[#e6d2a0] p-3 shadow-[0_10px_30px_rgba(74,51,32,0.4)]">
            <div className="pointer-events-none absolute inset-2 rounded-sm border border-[#4a3320]/40" />
            <div className="aspect-[4/3] w-full overflow-hidden rounded-sm border border-[#4a3320]/60">
              <FauxMap variant="atlas" members={roster} className="h-full" />
            </div>
            <p className="mt-2 text-center text-xs italic text-[#6b4a2e]">
              A map table, laid out on parchment &mdash; every marker is an
              honest last-known position.
            </p>
          </div>
        </main>

        {/* RIGHT RAIL: compass + invite */}
        <aside className="flex flex-col items-center gap-6 self-start rounded-sm border-2 border-[#4a3320] bg-[#f1e2bd] p-5 shadow-[3px_3px_0_0_#d9c088]">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6b4a2e]">
            Bearings
          </p>

          <CompassRose />

          <div className="w-full border-t border-[#4a3320]/30 pt-4 text-center">
            <p className="mb-3 text-sm font-semibold">
              Invite a fellow dragon to this atlas
            </p>
            <Link
              href="/mvp/atlas/room/invite"
              className="inline-block w-full rounded-sm border-2 border-[#4a3320] bg-[#4a3320] px-4 py-2 text-sm font-bold text-[#f1e2bd] hover:bg-[#3a2718] transition"
            >
              🧧 Invite &amp; QR code
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

function CompassRose() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-32 w-32 text-[#4a3320]"
      aria-hidden
    >
      <circle
        cx="60"
        cy="60"
        r="52"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="60"
        cy="60"
        r="38"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        const isCardinal = i % 4 === 0;
        const len = isCardinal ? 50 : i % 2 === 0 ? 34 : 20;
        const rad = (angle * Math.PI) / 180;
        const x2 = 60 + len * Math.sin(rad);
        const y2 = 60 - len * Math.cos(rad);
        return (
          <line
            key={i}
            x1="60"
            y1="60"
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth={isCardinal ? 1.5 : 0.75}
            opacity={isCardinal ? 0.9 : 0.4}
          />
        );
      })}
      <text x="60" y="14" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">N</text>
      <text x="60" y="114" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">S</text>
      <text x="8" y="64" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">W</text>
      <text x="112" y="64" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">E</text>
    </svg>
  );
}
