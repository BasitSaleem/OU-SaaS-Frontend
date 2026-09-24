import Link from "next/link";
import type { FooterColumnData } from "@/constant/navigationData";

const FooterColumn: React.FC<{ column: FooterColumnData }> = ({ column }) => (
  <div className="text-left">
    <div className="mb-4 text-[14px] font-semibold text-charcoal">{column.title}</div>
    <ul className="space-y-3">
      {column.links.map((link) => (
        <li key={link.label}>
          {link.external ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-g500 transition-colors duration-150 hover:text-charcoal"
            >
              {link.label}
            </a>
          ) : (
            <Link
              href={link.href}
              className="text-[14px] text-g500 transition-colors duration-150 hover:text-charcoal"
            >
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default FooterColumn;
