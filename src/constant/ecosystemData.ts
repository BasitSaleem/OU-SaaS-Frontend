import type { StackPosition } from "@/hooks/useCardShuffle";

export interface EcosystemCard {
  id: "c1" | "c2" | "c3";
  title: string;
  description: string;
}

export const ECOSYSTEM_CARDS: EcosystemCard[] = [
  { id: "c1", title: "Unified Account", description: "One login gives access to every Owners product." },
  {
    id: "c2",
    title: "Connected Workspace",
    description: "Manage your teams, data, and operations from one place.",
  },
  { id: "c3", title: "Scale Effortlessly", description: "Add new products as your business grows." },
];

export const ECOSYSTEM_INITIAL_SLOTS: Record<string, StackPosition> = {
  c1: "left",
  c2: "front",
  c3: "right",
};

export const ECOSYSTEM_CARD_GRADIENT: Record<EcosystemCard["id"], string> = {
  c1: "bg-[linear-gradient(150deg,#8A72F2_0%,#6B4FD9_55%,#5138B0_100%)]",
  c2: "bg-[linear-gradient(150deg,#FF8A80_0%,#F95C5B_55%,#D8455A_100%)]",
  c3: "bg-[linear-gradient(150deg,#4FDCC4_0%,#14B8A6_55%,#0E8E80_100%)]",
};
