import Link from "next/link";
import PhoneFrame from "../../_components/PhoneFrame";
import FauxMap from "../../_components/FauxMap";
import { activeRoom, presenceLabelPast, roster } from "../../_data";

export default function CrispRoomMobile() {
  const online = roster.filter((m) => m.state !== "offline");
  const offline = roster.filter((m) => m.state === "offline");

  return (
    <div className="min-h-screen bg-[#f5f6f8] flex flex-col items-center justify-center px-6 py-10 text-zinc-900">
      <PhoneFrame className="bg-white text-zinc-900">
        <div className="flex items-center justify-between px-4 py-2">
          <Link
            href="/mvp/crisp/rooms"
            className="text-sm text-zinc-500"
          >
            ← Rooms
          </Link>
          <span className="text-sm font-semibold">
            {activeRoom.emoji} {activeRoom.name}
          </span>
          <Link
            href="/mvp/crisp/room/invite"
            className="text-sm font-medium text-[#6B3FA0]"
          >
            Invite
          </Link>
        </div>

        <div className="relative flex-1">
          <FauxMap variant="crisp" members={roster} className="h-full" />

          <Link
            href="/mvp/crisp/room/desktop"
            className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-zinc-700 shadow"
          >
            View on desktop →
          </Link>

          {/* Swipe-up drawer peek */}
          <div className="absolute bottom-0 left-0 right-0 rounded-t-3xl border border-black/5 bg-white/80 px-5 pb-6 pt-2.5 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl">
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-zinc-300" />
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-400">
              Online — {online.length}
            </p>
            <ul className="mb-3 space-y-1.5">
              {online.map((m) => (
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
                  <span className="text-xs text-zinc-500">
                    {presenceLabelPast(m.state)} · {m.lastSeen}
                  </span>
                </li>
              ))}
            </ul>
            {offline.length > 0 && (
              <>
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-400">
                  Offline — {offline.length}
                </p>
                <ul className="space-y-1.5">
                  {offline.map((m) => (
                    <li
                      key={m.id}
                      className="flex items-center justify-between text-sm text-zinc-400"
                    >
                      <span className="flex items-center gap-2">
                        <span aria-hidden>{m.emoji}</span>
                        <span className="font-medium">{m.name}</span>
                      </span>
                      <span className="text-xs">{m.lastSeen}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </PhoneFrame>

      <Link
        href="/mvp/crisp/rooms"
        className="mt-8 text-sm text-zinc-500 underline underline-offset-4 hover:text-zinc-800"
      >
        ← Back to rooms
      </Link>
    </div>
  );
}
