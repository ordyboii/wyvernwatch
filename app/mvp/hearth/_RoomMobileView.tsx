import Link from "next/link";
import PhoneFrame from "../_components/PhoneFrame";
import FauxMap from "../_components/FauxMap";
import { activeRoom, presenceLabel, roster } from "../_data";

export default function RoomMobileView({
  guestBanner,
}: {
  guestBanner?: string;
}) {
  const online = roster.filter((m) => m.state !== "offline");
  const offline = roster.filter((m) => m.state === "offline");

  return (
    <div className="min-h-screen bg-[#FBF3E7] flex flex-col items-center justify-center px-4 py-10 text-[#3a2a1a]">
      {guestBanner && (
        <div className="mb-4 w-full max-w-[380px] rounded-2xl border-4 border-[#3a2a1a] bg-[#6B3FA0] px-4 py-3 text-center text-sm font-extrabold text-white shadow-[4px_4px_0_0_#3a2a1a]">
          {guestBanner}
        </div>
      )}

      <PhoneFrame
        frameClassName="border-[#3a2a1a]"
        className="bg-[#FBF3E7] text-[#3a2a1a]"
      >
        <div className="flex items-center justify-between px-4 py-2">
          <Link
            href="/mvp/hearth/rooms"
            className="text-sm font-bold text-[#6B3FA0]"
          >
            ← Rooms
          </Link>
          <span className="flex items-center gap-1 font-extrabold">
            <span aria-hidden>{activeRoom.emoji}</span> {activeRoom.name}
          </span>
          <Link
            href="/mvp/hearth/room/invite"
            className="rounded-full border-2 border-[#3a2a1a] bg-[#C2410C] px-3 py-1 text-xs font-extrabold text-white"
          >
            Invite
          </Link>
        </div>

        <div className="relative flex-1 mx-3 mb-2 rounded-2xl border-4 border-[#3a2a1a] overflow-hidden">
          <FauxMap variant="hearth" members={roster} className="h-full" />
        </div>

        <Link
          href="/mvp/hearth/room/desktop"
          className="mx-4 mb-2 block rounded-xl border-2 border-[#3a2a1a] bg-white px-3 py-1.5 text-center text-xs font-bold text-[#6B3FA0]"
        >
          View on desktop →
        </Link>

        {/* Swipe-up drawer peek */}
        <div className="rounded-t-3xl border-t-4 border-[#3a2a1a] bg-white px-4 pt-2 pb-4">
          <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-[#3a2a1a]/30" />
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#6b5744]">
            Roster · {online.length} online
          </p>
          <ul className="space-y-2 max-h-[220px] overflow-y-auto">
            {online.map((m) => (
              <li
                key={m.id}
                className="flex items-center justify-between rounded-xl border-2 border-[#3a2a1a] px-3 py-2"
              >
                <span className="flex items-center gap-2 font-bold">
                  <span aria-hidden>{m.emoji}</span>
                  {m.name}
                  {m.isSelf && (
                    <span className="rounded-full bg-[#6B3FA0] px-2 py-0.5 text-[10px] font-extrabold text-white">
                      You
                    </span>
                  )}
                </span>
                <div className="text-right text-xs font-semibold text-[#6b5744]">
                  <div>{presenceLabel(m.state)}</div>
                  <div>{m.lastSeen}</div>
                </div>
              </li>
            ))}
          </ul>

          {offline.length > 0 && (
            <>
              <p className="mt-3 mb-2 text-xs font-bold uppercase tracking-wide text-[#6b5744]">
                Offline
              </p>
              <ul className="space-y-2">
                {offline.map((m) => (
                  <li
                    key={m.id}
                    className="flex items-center justify-between rounded-xl border-2 border-[#3a2a1a]/40 px-3 py-2 opacity-70"
                  >
                    <span className="flex items-center gap-2 font-bold">
                      <span aria-hidden>{m.emoji}</span>
                      {m.name}
                    </span>
                    <div className="text-right text-xs font-semibold text-[#6b5744]">
                      <div>{presenceLabel(m.state)}</div>
                      <div>{m.lastSeen}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </PhoneFrame>
    </div>
  );
}
