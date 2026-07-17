export type PresenceState = "appear" | "vanish" | "resting" | "offline";

export function presenceLabel(state: PresenceState) {
  switch (state) {
    case "appear":
      return "Appear";
    case "vanish":
      return "Vanish";
    case "resting":
      return "Resting 😴";
    case "offline":
      return "Offline";
  }
}

export function presenceLabelPast(state: PresenceState) {
  switch (state) {
    case "appear":
      return "Appeared";
    case "vanish":
      return "Vanished";
    case "resting":
      return "Resting 😴";
    case "offline":
      return "Offline";
  }
}

export type RosterMember = {
  id: string;
  name: string;
  emoji: string;
  state: PresenceState;
  lastSeen: string;
  x: number; // percentage position on the faux map, 0-100
  y: number; // percentage position on the faux map, 0-100
  isSelf?: boolean;
};

export type Room = {
  id: string;
  name: string;
  emoji: string;
  memberCount: number;
  role: "owner" | "saved";
  lastActive: string;
};

export const rooms: Room[] = [
  {
    id: "italy-trip",
    name: "Italy Trip",
    emoji: "🍝",
    memberCount: 5,
    role: "owner",
    lastActive: "2m ago",
  },
  {
    id: "weekend-hike",
    name: "Weekend Hike",
    emoji: "🥾",
    memberCount: 3,
    role: "owner",
    lastActive: "1h ago",
  },
  {
    id: "family-hearth",
    name: "Family Hearth",
    emoji: "🏡",
    memberCount: 6,
    role: "saved",
    lastActive: "Yesterday",
  },
];

export const roster: RosterMember[] = [
  {
    id: "emberclaw",
    name: "Emberclaw",
    emoji: "🐉",
    state: "appear",
    lastSeen: "now",
    x: 62,
    y: 38,
    isSelf: true,
  },
  {
    id: "frostwing",
    name: "Frostwing",
    emoji: "🐲",
    state: "appear",
    lastSeen: "now",
    x: 34,
    y: 55,
  },
  {
    id: "cindertail",
    name: "Cindertail",
    emoji: "🔥",
    state: "resting",
    lastSeen: "last seen 3m ago",
    x: 48,
    y: 22,
  },
  {
    id: "mossback",
    name: "Mossback",
    emoji: "🐲",
    state: "vanish",
    lastSeen: "vanished 12m ago",
    x: 71,
    y: 66,
  },
  {
    id: "gale",
    name: "Gale",
    emoji: "💨",
    state: "offline",
    lastSeen: "last seen 2h ago",
    x: 20,
    y: 30,
  },
];

export const activeRoom = rooms[0];
