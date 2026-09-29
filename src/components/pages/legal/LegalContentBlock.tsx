import Link from "next/link";
import type { ContentBlock, ListItem, TextSegment } from "@/constant/legal/legalTypes";

const INLINE_LINK_CLASS =
  "font-medium text-[#0b0b0b] [background:linear-gradient(#f95c5b,#f95c5b)_0_100%_/_100%_1px_no-repeat] transition-all duration-200 hover:text-[#f95c5b]";

const renderSegment = (segment: TextSegment, i: number) => {
  if (typeof segment === "string") return <span key={i}>{segment}</span>;

  return segment.href.startsWith("/") ? (
    <Link key={i} href={segment.href} className={INLINE_LINK_CLASS}>
      {segment.text}
    </Link>
  ) : (
    <a key={i} href={segment.href} className={INLINE_LINK_CLASS}>
      {segment.text}
    </a>
  );
};

const renderListItem = (item: ListItem, i: number) => (
  <li
    key={i}
    className="relative pl-[22px] text-[16px] leading-[1.7] text-[#3a3a38] before:absolute before:top-[0.72em] before:left-[4px] before:h-[6px] before:w-[6px] before:rounded-full before:bg-[#e4e4e0] before:shadow-[inset_0_0_0_1.5px_#9a9a97]"
  >
    {typeof item === "string" ? (
      item
    ) : (
      <>
        {item.strong && <strong className="font-semibold text-[#0b0b0b]">{item.strong} </strong>}
        {item.text && <span>{item.text} </span>}
        {item.link &&
          (item.link.href.startsWith("/") ? (
            <Link href={item.link.href} className={INLINE_LINK_CLASS}>
              {item.link.text}
            </Link>
          ) : (
            <a
              href={item.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={INLINE_LINK_CLASS}
            >
              {item.link.text}
            </a>
          ))}
      </>
    )}
  </li>
);

const LegalContentBlock: React.FC<{ block: ContentBlock }> = ({ block }) => {
  if (block.type === "p") {
    return (
      <p className="text-[16px] leading-[1.7] text-[#3a3a38]">
        {block.content.map(renderSegment)}
      </p>
    );
  }

  if (block.type === "h3") {
    return (
      <h3 className="mt-4 mb-1 text-[17px] font-semibold leading-[1.4] tracking-[-0.01em] text-[#0b0b0b]">
        {block.text}
      </h3>
    );
  }

  if (block.type === "ul") {
    return <ul className="m-0 flex flex-col gap-2.5 list-none p-0">{block.items.map(renderListItem)}</ul>;
  }

  if (block.type === "table") {
    return (
      <div className="mt-2 overflow-hidden rounded-[16px] border border-[#e4e4e0] bg-white">
        <table className="w-full border-collapse text-left text-[15px] leading-[1.5]">
          <thead>
            <tr className="border-b border-[#e4e4e0] bg-[#f7f7f5]">
              {block.headers.map((header) => (
                <th key={header} scope="col" className="px-[18px] py-3.5 text-[13px] font-medium text-[#6b6b6b]">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i} className="transition-colors duration-180 hover:bg-[#fbfbfa] [tr+tr_&]:border-t [tr+tr_&]:border-[#e4e4e0]">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-[18px] py-3.5 align-top ${j === 0 ? "font-medium text-[#0b0b0b]" : "text-[#3a3a38]"}`}
                    data-label={block.headers[j]}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="mt-3 grid grid-cols-2 gap-5 rounded-[20px] border border-[#e4e4e0] bg-white p-6 max-sm:grid-cols-1">
      <address className="flex gap-3 text-[16px] not-italic leading-[1.6] text-[#3a3a38]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-[#9a9a97]">
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span className="flex flex-col">
          <span className="font-semibold text-[#0b0b0b]">{block.name}</span>
          {block.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </span>
      </address>
      <div className="flex items-start gap-3 text-[16px] leading-[1.6] text-[#3a3a38]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-[#9a9a97]">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        <span>
          Email:{" "}
          <a href={`mailto:${block.email}`} className={INLINE_LINK_CLASS}>
            {block.email}
          </a>
        </span>
      </div>
    </div>
  );
};

export default LegalContentBlock;
