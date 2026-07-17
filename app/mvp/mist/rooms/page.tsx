import Link from "next/link";
import { rooms } from "../../_data";

export default function MistRooms() {
  const owned = rooms.filter((r) => r.role === "owner");
  const saved = rooms.filter((r) => r.role === "saved");

  return (
    <div className="min-h-screen bg-[#0a0614] px-6 py-12 text-zinc-100">
      <main className="mx-auto w-full max-w-lg">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-purple-100">
              My Rooms
            </h1>
            <p className="text-sm text-zinc-400">Where your dragons gather.</p>
          </div>
          <span className="text-3xl drop-shadow-[0_0_16px_rgba(194,65,12,0.5)]" aria-hidden>
            🐉
          </span>
        </header>

        <section className="mb-8">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Owned by you
          </h2>
          <div className="flex flex-col gap-3">
            {owned.map((room) => (
              <Link
                key={room.id}
                href="/mvp/mist/room"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md transition hover:border-[#C2410C]/40 hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>
                    {room.emoji}
                  </span>
                  <div>
                    <p className="font-medium text-zinc-100">{room.name}</p>
                    <p className="text-xs text-zinc-500">
                      {room.memberCount} dragons · active {room.lastActive}
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-[#C2410C]/40 bg-[#C2410C]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#f0a878]">
                  Owner
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Saved rooms
          </h2>
          <div className="flex flex-col gap-3">
            {saved.map((room) => (
              <Link
                key={room.id}
                href="/mvp/mist/room"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md transition hover:border-[#C2410C]/40 hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>
                    {room.emoji}
                  </span>
                  <div>
                    <p className="font-medium text-zinc-100">{room.name}</p>
                    <p className="text-xs text-zinc-500">
                      {room.memberCount} dragons · active {room.lastActive}
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-300">
                  Saved
                </span>
              </Link>
            ))}
          </div>
        </section>

        <Link
          href="/mvp/mist/join"
          className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 px-5 py-4 text-sm font-medium text-zinc-300 transition hover:border-[#C2410C]/50 hover:text-purple-100"
        >
          <span aria-hidden>🔗</span> Have a room link or QR code? Join a room
        </Link>

        <Link
          href="/mvp/mist"
          className="mt-8 block text-center text-xs text-zinc-500 underline decoration-zinc-700 underline-offset-4 hover:text-zinc-300"
        >
          ← Back
        </Link>
      </main>
    </div>
  );
}
