export interface HeroWord {
  text: string;
  highlight?: boolean;
}

export const HERO_TITLE_WORDS: HeroWord[] = [
  { text: "Business" },
  { text: "Software" },
  { text: "for" },
  { text: "Service", highlight: true },
  { text: "Industries", highlight: true },
];

export const HERO_TITLE_BASE_DELAY = 1.55;
export const HERO_TITLE_WORD_STEP = 0.07;

export const HERO_SUB =
  "We build tools that help business owners grow — from marketing automation for home services to inventory and operations management for retail. One account. All products.";

export interface HeroTrustItem {
  label: string;
  icon: "live" | "check" | "shield";
}

export const HERO_TRUST_ITEMS: HeroTrustItem[] = [
  { label: "2 products live", icon: "live" },
  { label: "No contracts", icon: "check" },
  { label: "White-glove onboarding", icon: "shield" },
];

export interface MeshBlobConfig {
  className: string;
}

export const MESH_BLOBS: MeshBlobConfig[] = [
  {
    className:
      "top-[-25%] left-[-15%] h-[70vw] w-[70vw] max-h-[900px] max-w-[900px] bg-[radial-gradient(circle,rgba(121,92,245,.68)_0%,rgba(121,92,245,.22)_40%,transparent_65%)] blur-[80px] animate-[meshA_25s_ease-in-out_infinite_alternate]",
  },
  {
    className:
      "top-[10%] right-[-12%] h-[55vw] w-[55vw] max-h-[700px] max-w-[700px] bg-[radial-gradient(circle,rgba(249,92,91,.52)_0%,rgba(249,92,91,.16)_40%,transparent_65%)] blur-[90px] animate-[meshB_30s_ease-in-out_infinite_alternate]",
  },
  {
    className:
      "bottom-[-10%] left-[20%] h-[50vw] w-[50vw] max-h-[650px] max-w-[650px] bg-[radial-gradient(circle,rgba(177,30,103,.42)_0%,rgba(177,30,103,.12)_45%,transparent_65%)] blur-[100px] animate-[meshC_22s_ease-in-out_infinite_alternate]",
  },
  {
    className:
      "top-[-8%] right-[15%] h-[45vw] w-[45vw] max-h-[580px] max-w-[580px] bg-[radial-gradient(circle,rgba(155,123,247,.52)_0%,rgba(155,123,247,.14)_45%,transparent_65%)] blur-[70px] animate-[meshD_28s_ease-in-out_infinite_alternate]",
  },
  {
    className:
      "right-0 bottom-[5%] h-[40vw] w-[40vw] max-h-[500px] max-w-[500px] bg-[radial-gradient(circle,rgba(249,123,107,.42)_0%,transparent_60%)] blur-[85px] animate-[meshE_26s_ease-in-out_infinite_alternate]",
  },
  {
    className:
      "top-[30%] left-1/2 h-[50vw] w-[60vw] max-h-[600px] max-w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(255,255,255,.7)_0%,rgba(255,255,255,.2)_40%,transparent_60%)] blur-[60px]",
  },
];
