import Link from "next/link";
import type { FooterColumnData } from "@/constant/navigationData";

const FooterColumn: React.FC<{ column: FooterColumnData }> = ({ column }) => (
  <div>
    <h3 className="mb-[18px] font-mono text-[11.5px] font-medium tracking-[0.08em] text-neutral-2 uppercase">
      {column.title}
    </h3>
    <ul className="flex flex-col gap-3">
      {column.links.map((link) => (
        <li key={link.label}>
          {link.external ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] text-[#2e2e2e] transition-colors duration-150 hover:text-ink"
            >
              {link.label}
            </a>
          ) : (
            <Link href={link.href} className="text-[15px] text-[#2e2e2e] transition-colors duration-150 hover:text-ink">
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default FooterColumn;
