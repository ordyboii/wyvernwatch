import Link from "next/link";
import { activeRoom } from "../../../_data";

export default function AtlasInvite() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_40%_25%,#f1e2bd_0%,#e6d2a0_45%,#d9c088_100%)] flex flex-col items-center justify-center px-6 py-16 font-serif text-[#4a3320]">
      <div className="w-full max-w-sm rounded-sm border-2 border-[#4a3320] bg-[#f1e2bd] p-8 text-center shadow-[0_0_0_4px_#e6d2a0,0_8px_24px_rgba(74,51,32,0.35)]">
        {/* wax seal */}
        <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#8a3324] shadow-[0_3px_6px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-1.5 rounded-full border-2 border-[#6e2419]" />
          <span className="text-2xl" aria-hidden>
            🐉
          </span>
        </div>

        <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#6b4a2e]">
          Sealed Invitation
        </p>
        <h1 className="mb-1 text-2xl font-bold">
          Invite to {activeRoom.name}
        </h1>
        <p className="mb-6 text-sm italic text-[#6b4a2e]">
          Expires in 24h &mdash; a fresh seal must be cast after.
        </p>

        {/* QR placeholder */}
        <div className="mx-auto mb-5 flex h-36 w-36 items-center justify-center rounded-sm border-2 border-[#4a3320] bg-[#e6d2a0]">
          <div
            className="grid h-28 w-28 grid-cols-6 grid-rows-6 gap-0.5 p-1"
            aria-label="QR code placeholder"
          >
            {Array.from({ length: 36 }).map((_, i) => (
              <div
                key={i}
                className={`${
                  (i * 7 + (i % 3)) % 5 === 0 ? "bg-[#4a3320]" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#6b4a2e]">
          QR code
        </p>

        <label className="mb-2 block text-left text-xs font-bold uppercase tracking-widest text-[#6b4a2e]">
          Invite link
        </label>
        <div className="mb-6 flex items-stretch gap-2">
          <input
            readOnly
            value={`dragonmap.app/atlas/${activeRoom.id}/join`}
            className="flex-1 truncate rounded-sm border-2 border-[#4a3320]/60 bg-[#e6d2a0] px-3 py-2 text-xs text-[#4a3320]"
          />
          <button
            type="button"
            className="shrink-0 rounded-sm border-2 border-[#4a3320] bg-[#4a3320] px-4 py-2 text-xs font-bold text-[#f1e2bd] hover:bg-[#3a2718] transition"
          >
            Copy
          </button>
        </div>

        <Link
          href="/mvp/atlas/room"
          className="block w-full rounded-sm border-2 border-[#4a3320] px-6 py-3 text-sm font-bold hover:bg-[#4a3320] hover:text-[#f1e2bd] transition"
        >
          ← Back to room
        </Link>
      </div>
    </div>
  );
}
