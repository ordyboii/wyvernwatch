import Link from "next/link";
import { rooms } from "../../_data";

export default function AtlasRooms() {
  const owned = rooms.filter((r) => r.role === "owner");
  const saved = rooms.filter((r) => r.role === "saved");

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_40%_25%,#f1e2bd_0%,#e6d2a0_45%,#d9c088_100%)] px-6 py-14 text-[#4a3320] font-serif">
      <div className="mx-auto w-full max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#6b4a2e]">
          The Atlas
        </p>
        <h1 className="mb-8 text-3xl font-bold tracking-tight">My Rooms</h1>

        <section className="mb-8">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#6b4a2e]">
            Charted by you (owner)
          </h2>
          <div className="flex flex-col gap-3">
            {owned.map((room) => (
              <Link
                key={room.id}
                href="/mvp/atlas/room"
                className="flex items-center justify-between rounded-sm border-2 border-[#4a3320] bg-[#f1e2bd] px-5 py-4 shadow-[3px_3px_0_0_#4a3320] transition hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#4a3320]"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>
                    {room.emoji}
                  </span>
                  <span>
                    <span className="block font-bold">{room.name}</span>
                    <span className="block text-xs text-[#6b4a2e]">
                      {room.memberCount} dragons · active {room.lastActive}
                    </span>
                  </span>
                </span>
                <span className="rounded-full border border-[#4a3320] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
                  Owner
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#6b4a2e]">
            Saved atlases
          </h2>
          <div className="flex flex-col gap-3">
            {saved.map((room) => (
              <Link
                key={room.id}
                href="/mvp/atlas/room"
                className="flex items-center justify-between rounded-sm border-2 border-[#4a3320]/70 bg-[#e6d2a0] px-5 py-4 transition hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>
                    {room.emoji}
                  </span>
                  <span>
                    <span className="block font-bold">{room.name}</span>
                    <span className="block text-xs text-[#6b4a2e]">
                      {room.memberCount} dragons · active {room.lastActive}
                    </span>
                  </span>
                </span>
                <span className="rounded-full border border-[#4a3320]/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
                  Saved
                </span>
              </Link>
            ))}
          </div>
        </section>

        <div className="rounded-sm border-2 border-dashed border-[#4a3320]/60 bg-[#e6d2a0]/50 px-5 py-4 text-center">
          <p className="mb-2 text-sm font-semibold">
            Handed a link or a QR code by a friend?
          </p>
          <Link
            href="/mvp/atlas/join"
            className="inline-block rounded-full border-2 border-[#4a3320] px-5 py-2 text-sm font-bold hover:bg-[#4a3320] hover:text-[#f1e2bd] transition"
          >
            Join a room →
          </Link>
        </div>

        <Link
          href="/mvp/atlas/signin"
          className="mt-8 inline-block text-sm font-semibold text-[#6b4a2e] underline underline-offset-2 hover:text-[#4a3320]"
        >
          ← Back to sign in
        </Link>
      </div>
    </div>
  );
}
