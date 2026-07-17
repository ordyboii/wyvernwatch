import type { RosterMember } from "../_data";

export type MapVariant = "hearth" | "mist" | "atlas" | "crisp";

const backgrounds: Record<MapVariant, string> = {
  hearth:
    "bg-[radial-gradient(circle_at_30%_20%,#f4d9a8_0%,#eab676_35%,#d99a5b_70%,#c2410c_100%)]",
  mist: "bg-[radial-gradient(circle_at_50%_30%,#2d1b4e_0%,#1a1030_45%,#0a0614_100%)]",
  atlas:
    "bg-[radial-gradient(circle_at_40%_25%,#f1e2bd_0%,#e6d2a0_45%,#d9c088_100%)]",
  crisp: "bg-[radial-gradient(circle_at_50%_30%,#e7edf5_0%,#d7e0ec_55%,#c3d0e0_100%)]",
};

const markerRing: Record<MapVariant, string> = {
  hearth: "ring-[#6B3FA0]",
  mist: "ring-[#C2410C] shadow-[0_0_16px_4px_rgba(194,65,12,0.55)]",
  atlas: "ring-[#4a3320]",
  crisp: "ring-[#6B3FA0]",
};

function stateBadge(state: RosterMember["state"]) {
  switch (state) {
    case "appear":
      return "🟢";
    case "vanish":
      return "💨";
    case "resting":
      return "😴";
    case "offline":
      return "⚪️";
  }
}

export default function FauxMap({
  variant,
  members,
  className = "",
  showFitControl = true,
}: {
  variant: MapVariant;
  members: RosterMember[];
  className?: string;
  showFitControl?: boolean;
}) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden ${backgrounds[variant]} ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        preserveAspectRatio="none"
      >
        <path d="M0,80 C150,140 300,20 500,90 S700,160 900,60" stroke="currentColor" fill="none" strokeWidth="2" />
        <path d="M0,220 C200,180 350,260 550,200 S800,140 1000,220" stroke="currentColor" fill="none" strokeWidth="2" />
      </svg>

      {members.map((m) => (
        <div
          key={m.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-0.5"
          style={{ left: `${m.x}%`, top: `${m.y}%` }}
        >
          <div
            className={`relative flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg ring-2 ${markerRing[variant]} ${m.isSelf ? "scale-125" : ""}`}
          >
            <span aria-hidden>{m.emoji}</span>
            <span className="absolute -right-1 -top-1 text-[10px]" aria-hidden>
              {stateBadge(m.state)}
            </span>
          </div>
        </div>
      ))}

      {showFitControl && (
        <button
          type="button"
          className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-black shadow"
        >
          Fit everyone
        </button>
      )}
    </div>
  );
}
