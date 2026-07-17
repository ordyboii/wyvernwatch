import Link from "next/link";
import { rooms } from "../../_data";

export default function CrispRooms() {
  const owned = rooms.filter((r) => r.role === "owner");
  const saved = rooms.filter((r) => r.role === "saved");

  return (
    <div className="min-h-screen bg-[#f5f6f8] px-6 py-12 text-zinc-900">
      <div className="mx-auto max-w-lg">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              My Rooms
            </h1>
            <p className="text-sm text-zinc-500">Signed in as Emberclaw 🐉</p>
          </div>
          <Link
            href="/mvp/crisp/room"
            className="rounded-xl bg-[#6B3FA0] px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#6B3FA0]/30 transition hover:bg-[#5c3489]"
          >
            + New room
          </Link>
        </div>

        <h2 className="mb-2.5 text-xs font-medium uppercase tracking-wide text-zinc-400">
          Owner
        </h2>
        <ul className="mb-7 space-y-2">
          {owned.map((room) => (
            <li key={room.id}>
              <Link
                href="/mvp/crisp/room"
                className="flex items-center justify-between rounded-2xl border border-black/5 bg-white/70 px-5 py-4 shadow-sm shadow-black/5 backdrop-blur-xl transition hover:bg-white"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>
                    {room.emoji}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">
                      {room.name}
                    </span>
                    <span className="block text-xs text-zinc-500">
                      {room.memberCount} members · active {room.lastActive}
                    </span>
                  </span>
                </span>
                <span className="rounded-full bg-[#6B3FA0]/10 px-2.5 py-1 text-xs font-medium text-[#6B3FA0]">
                  Owner
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="mb-2.5 text-xs font-medium uppercase tracking-wide text-zinc-400">
          Saved
        </h2>
        <ul className="mb-8 space-y-2">
          {saved.map((room) => (
            <li key={room.id}>
              <Link
                href="/mvp/crisp/room"
                className="flex items-center justify-between rounded-2xl border border-black/5 bg-white/70 px-5 py-4 shadow-sm shadow-black/5 backdrop-blur-xl transition hover:bg-white"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>
                    {room.emoji}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">
                      {room.name}
                    </span>
                    <span className="block text-xs text-zinc-500">
                      {room.memberCount} members · active {room.lastActive}
                    </span>
                  </span>
                </span>
                <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-500">
                  Saved
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="rounded-2xl border border-dashed border-black/10 bg-white/50 px-5 py-4 text-center">
          <p className="mb-2 text-sm text-zinc-500">
            Have a room link or QR code?
          </p>
          <Link
            href="/mvp/crisp/join"
            className="inline-block rounded-full border border-[#6B3FA0]/30 px-5 py-2 text-sm font-medium text-[#6B3FA0] transition hover:bg-[#6B3FA0]/10"
          >
            Join with a link →
          </Link>
        </div>

        <Link
          href="/mvp/crisp/signin"
          className="mt-8 inline-block text-sm text-zinc-500 underline underline-offset-4 hover:text-zinc-800"
        >
          ← Back to sign in
        </Link>
      </div>
    </div>
  );
}
