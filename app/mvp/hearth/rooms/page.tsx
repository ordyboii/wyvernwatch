import Link from "next/link";
import { rooms } from "../../_data";

export default function HearthRooms() {
  const owned = rooms.filter((r) => r.role === "owner");
  const saved = rooms.filter((r) => r.role === "saved");

  return (
    <div className="min-h-screen bg-[#FBF3E7] px-6 py-12 text-[#3a2a1a]">
      <div className="mx-auto max-w-lg">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold">My Rooms 🏕️</h1>
            <p className="text-sm font-medium text-[#6b5744]">
              Signed in as Emberclaw 🐉
            </p>
          </div>
          <Link
            href="/mvp/hearth/room"
            className="rounded-2xl border-4 border-[#3a2a1a] bg-[#C2410C] px-4 py-3 text-sm font-extrabold text-white shadow-[3px_3px_0_0_#3a2a1a]"
          >
            + New room
          </Link>
        </div>

        <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-[#6b5744]">
          Rooms you own
        </h2>
        <ul className="mb-8 space-y-3">
          {owned.map((room) => (
            <li key={room.id}>
              <Link
                href="/mvp/hearth/room"
                className="flex items-center justify-between rounded-2xl border-4 border-[#3a2a1a] bg-white px-5 py-4 shadow-[4px_4px_0_0_#3a2a1a] transition hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden>
                    {room.emoji}
                  </span>
                  <span>
                    <span className="block font-extrabold">{room.name}</span>
                    <span className="block text-xs font-medium text-[#6b5744]">
                      {room.memberCount} dragons · active {room.lastActive}
                    </span>
                  </span>
                </span>
                <span className="rounded-full bg-[#6B3FA0] px-3 py-1 text-xs font-bold text-white">
                  Owner
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-[#6b5744]">
          Saved rooms
        </h2>
        <ul className="mb-8 space-y-3">
          {saved.map((room) => (
            <li key={room.id}>
              <Link
                href="/mvp/hearth/room"
                className="flex items-center justify-between rounded-2xl border-4 border-[#3a2a1a] bg-white px-5 py-4 shadow-[4px_4px_0_0_#3a2a1a] transition hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden>
                    {room.emoji}
                  </span>
                  <span>
                    <span className="block font-extrabold">{room.name}</span>
                    <span className="block text-xs font-medium text-[#6b5744]">
                      {room.memberCount} dragons · active {room.lastActive}
                    </span>
                  </span>
                </span>
                <span className="rounded-full bg-[#eab676] px-3 py-1 text-xs font-bold text-[#3a2a1a]">
                  Saved
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="rounded-2xl border-4 border-dashed border-[#6b5744] bg-white/60 px-5 py-4 text-center">
          <p className="mb-2 text-sm font-semibold text-[#6b5744]">
            Have a room link or QR code?
          </p>
          <Link
            href="/mvp/hearth/join"
            className="inline-block rounded-full border-2 border-[#C2410C] px-5 py-2 text-sm font-bold text-[#C2410C] hover:bg-[#C2410C] hover:text-white transition"
          >
            Join with a link →
          </Link>
        </div>

        <Link
          href="/mvp/hearth/signin"
          className="mt-8 inline-block text-sm font-semibold text-[#6b5744] underline underline-offset-2 hover:text-[#3a2a1a]"
        >
          ← Back to sign in
        </Link>
      </div>
    </div>
  );
}
