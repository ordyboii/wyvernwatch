import Link from "next/link";
import { activeRoom } from "../../../_data";

function QrPlaceholder() {
  // CSS-only faux QR grid, seeded pseudo-randomly for a "real" look.
  const cells = Array.from({ length: 64 }, (_, i) => (i * 37 + 5) % 7 < 3);
  return (
    <div className="mx-auto grid h-40 w-40 grid-cols-8 grid-rows-8 gap-0.5 rounded-xl border-4 border-[#3a2a1a] bg-white p-2">
      {cells.map((filled, i) => (
        <div
          key={i}
          className={filled ? "bg-[#3a2a1a] rounded-[1px]" : "bg-transparent"}
        />
      ))}
    </div>
  );
}

export default function HearthInvite() {
  return (
    <div className="min-h-screen bg-[#FBF3E7] flex flex-col items-center justify-center px-6 py-16 text-[#3a2a1a]">
      <div className="w-full max-w-sm rounded-3xl border-4 border-[#3a2a1a] bg-white p-8 text-center shadow-[6px_6px_0_0_#3a2a1a]">
        <div className="text-4xl mb-2" aria-hidden>
          {activeRoom.emoji}
        </div>
        <h1 className="text-2xl font-extrabold mb-1">
          Invite to {activeRoom.name}
        </h1>
        <p className="mb-5 text-sm font-medium text-[#6b5744]">
          Scan the QR code, or share the link below.
        </p>

        <QrPlaceholder />

        <div className="mt-5 flex items-center gap-2 rounded-xl border-2 border-[#3a2a1a] bg-[#FBF3E7] px-3 py-2">
          <span className="flex-1 truncate text-left text-xs font-semibold text-[#6b5744]">
            dragonmap.app/j/italy-trip-9k2x
          </span>
          <button
            type="button"
            className="shrink-0 rounded-lg border-2 border-[#3a2a1a] bg-[#6B3FA0] px-3 py-1 text-xs font-extrabold text-white"
          >
            Copy
          </button>
        </div>

        <p className="mt-3 text-xs font-bold text-[#C2410C]">
          Link expires in 24h
        </p>

        <Link
          href="/mvp/hearth/room"
          className="mt-6 block w-full rounded-2xl border-4 border-[#3a2a1a] bg-[#6B3FA0] px-6 py-3 text-center text-base font-extrabold text-white shadow-[4px_4px_0_0_#3a2a1a]"
        >
          Back to room
        </Link>
      </div>
    </div>
  );
}
