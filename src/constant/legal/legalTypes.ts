export type TextSegment = string | { text: string; href: string };

export type ListItem =
  | string
  | {
      strong?: string;
      text?: string;
      link?: { text: string; href: string };
    };

export type ContentBlock =
  | { type: "p"; content: TextSegment[] }
  | { type: "h3"; text: string }
  | { type: "ul"; items: ListItem[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "contact-card"; name: string; lines: string[]; email: string };

/** The section's own full heading — kept separate from the sidebar's (sometimes shorter) label. */
export interface LegalSectionContent {
  title: string;
  blocks: ContentBlock[];
}
