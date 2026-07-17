import Link from "next/link";
import PhoneFrame from "../../_components/PhoneFrame";
import FauxMap from "../../_components/FauxMap";
import { activeRoom, roster } from "../../_data";

const guest = { name: "Ashglider", emoji: "🐉" };

const guestRoster = [
  ...roster,
  {
    id: "ashglider",
    name: guest.name,
    emoji: guest.emoji,
    state: "appear" as const,
    lastSeen: "now",
    x: 55,
    y: 48,
    isSelf: true,
  },
].map((m) => ({ ...m, isSelf: m.id === "ashglider" }));

export default function CrispJoin() {
  return (
    <div className="min-h-screen bg-[#f5f6f8] flex flex-col items-center justify-center px-6 py-10 text-zinc-900">
      <div className="mb-5 w-full max-w-sm rounded-2xl border border-black/5 bg-white/70 px-5 py-3 text-center shadow-sm shadow-black/5 backdrop-blur-xl">
        <p className="text-sm font-medium">
          You joined as {guest.name} {guest.emoji}
        </p>
        <p className="text-xs text-zinc-500">
          Auto-assigned — you can change this later.
        </p>
      </div>

      <PhoneFrame className="bg-white text-zinc-900">
        <div className="flex items-center justify-between px-4 py-2">
          <Link
            href="/mvp/crisp"
            className="text-sm text-zinc-500"
          >
            ← Exit
          </Link>
          <span className="text-sm font-semibold">
            {activeRoom.emoji} {activeRoom.name}
          </span>
          <span className="w-10" />
        </div>

        <div className="relative flex-1">
          <FauxMap variant="crisp" members={guestRoster} className="h-full" />

          <div className="absolute bottom-0 left-0 right-0 rounded-t-3xl border border-black/5 bg-white/80 px-5 pb-6 pt-2.5 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl">
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-zinc-300" />
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-400">
              Members
            </p>
            <ul className="space-y-1.5">
              {guestRoster.map((m) => (
                <li
                  key={m.id}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="flex items-center gap-2">
                    <span aria-hidden>{m.emoji}</span>
                    <span className="font-medium">
                      {m.name}
                      {m.isSelf ? " (you)" : ""}
                    </span>
                  </span>
                  <span className="text-xs text-zinc-500">{m.lastSeen}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PhoneFrame>

      <Link
        href="/mvp/crisp"
        className="mt-8 text-sm text-zinc-500 underline underline-offset-4 hover:text-zinc-800"
      >
        ← Back to start
      </Link>
    </div>
  );
}
