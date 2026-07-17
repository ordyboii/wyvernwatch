import Link from "next/link";
import PhoneFrame from "../../_components/PhoneFrame";
import FauxMap from "../../_components/FauxMap";
import { activeRoom, roster } from "../../_data";

const GUEST_NAME = "Stormquill";

const guestRoster = [
  ...roster.map((m) => ({ ...m, isSelf: false })),
  {
    id: "guest-stormquill",
    name: GUEST_NAME,
    emoji: "🐉",
    state: "appear" as const,
    lastSeen: "now",
    x: 55,
    y: 60,
    isSelf: true,
  },
];

export default function AtlasJoin() {
  const online = guestRoster.filter((m) => m.state !== "offline");
  const offline = guestRoster.filter((m) => m.state === "offline");

  return (
    <div className="min-h-screen bg-[#d9c088] flex flex-col items-center justify-center gap-6 px-4 py-10 font-serif text-[#4a3320]">
      <div className="w-full max-w-sm rounded-sm border-2 border-[#4a3320] bg-[#f1e2bd] px-5 py-3 text-center shadow-[3px_3px_0_0_#4a3320]">
        <p className="text-sm font-bold">
          You have joined as {GUEST_NAME} 🐉
        </p>
        <p className="text-xs italic text-[#6b4a2e]">
          A guest seal was cast in your name for {activeRoom.name}.
        </p>
      </div>

      <PhoneFrame className="bg-[#f1e2bd] text-[#4a3320]">
        <div className="flex items-center justify-between border-b-2 border-[#4a3320]/30 px-4 py-2">
          <Link
            href="/mvp/atlas"
            className="text-lg leading-none"
            aria-label="Back to atlas"
          >
            ←
          </Link>
          <span className="flex items-center gap-1.5 text-sm font-bold">
            <span aria-hidden>{activeRoom.emoji}</span> {activeRoom.name}
          </span>
          <span className="text-lg leading-none opacity-30" aria-hidden>
            🧧
          </span>
        </div>

        <div className="relative flex-1">
          <FauxMap variant="atlas" members={guestRoster} className="h-full" />

          <div className="absolute bottom-0 left-0 right-0 rounded-t-2xl border-t-2 border-[#4a3320] bg-[#f1e2bd]/95 px-4 pb-3 pt-2 shadow-[0_-4px_12px_rgba(74,51,32,0.25)]">
            <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-[#4a3320]/40" />
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#6b4a2e]">
              The Roster
            </p>
            <ul className="flex flex-col gap-1.5 max-h-40 overflow-y-auto pr-1">
              {online.map((m) => (
                <li
                  key={m.id}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="flex items-center gap-2">
                    <span aria-hidden>{m.emoji}</span>
                    <span className="font-semibold">
                      {m.name}
                      {m.isSelf ? " (you)" : ""}
                    </span>
                  </span>
                  <span className="text-xs text-[#6b4a2e]">
                    {m.state === "appear" && "🟢 appeared"}
                    {m.state === "vanish" && `💨 ${m.lastSeen}`}
                    {m.state === "resting" && `😴 ${m.lastSeen}`}
                  </span>
                </li>
              ))}
              {offline.map((m) => (
                <li
                  key={m.id}
                  className="flex items-center justify-between text-sm opacity-60"
                >
                  <span className="flex items-center gap-2">
                    <span aria-hidden>{m.emoji}</span>
                    <span className="font-semibold">{m.name}</span>
                  </span>
                  <span className="text-xs">⚪️ {m.lastSeen}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PhoneFrame>

      <Link
        href="/mvp/atlas"
        className="text-sm font-semibold text-[#4a3320] underline underline-offset-2"
      >
        ← Back to Atlas landing
      </Link>
    </div>
  );
}
