import Link from "next/link";
import CardHeading from "@/components/pages/typography/CardHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import type { ContentBlock, ListItem, TextSegment } from "@/constant/legal/legalTypes";

const INLINE_LINK_CLASS =
  "border-b border-purple-10 text-purple transition-[border-color] duration-200 hover:border-purple";

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
    className="relative mb-2 pl-5 text-[15px] leading-[1.7] font-normal text-g600 before:absolute before:top-[11px] before:left-0 before:h-[5px] before:w-[5px] before:rounded-full before:bg-purple"
  >
    {typeof item === "string" ? (
      item
    ) : (
      <>
        {item.strong && <strong className="font-semibold text-charcoal">{item.strong} </strong>}
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
      <Paragraph className="mb-3.5 !text-[15px] lg:!text-[15px] !leading-[1.7] !font-normal !text-g600">
        {block.content.map(renderSegment)}
      </Paragraph>
    );
  }

  if (block.type === "h3") {
    return (
      <CardHeading className="mt-6 mb-2.5 !text-[1.0625rem] lg:!text-[1.0625rem] xl:!text-[1.0625rem] !font-semibold !tracking-[-0.01em]">
        {block.text}
      </CardHeading>
    );
  }

  if (block.type === "ul") {
    return <ul className="mb-3.5">{block.items.map(renderListItem)}</ul>;
  }

  if (block.type === "table") {
    return (
      <div className="mb-3.5 overflow-x-auto rounded-xl border border-g200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              {block.headers.map((header) => (
                <th
                  key={header}
                  className="border-b border-g200 bg-g100 px-[18px] py-3.5 text-left font-heading text-xs font-semibold tracking-[0.05em] text-g500 uppercase"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className="border-b border-g200 px-[18px] py-3.5 leading-[1.5] text-g600 [tr:last-child_&]:border-b-0">
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
    <div className="mt-2 rounded-2xl border border-g200 bg-white px-[30px] py-7">
      <div className="mb-2 font-heading text-[15px] font-semibold text-charcoal">{block.name}</div>
      {block.lines.map((line) => (
        <Paragraph key={line} className="mb-0.5 !text-[15px] lg:!text-[15px] !leading-[1.7] !text-g600">
          {line}
        </Paragraph>
      ))}
      <a
        href={`mailto:${block.email}`}
        className="mt-2 inline-block border-b border-purple-10 text-[15px] text-purple transition-[border-color] duration-200 hover:border-purple"
      >
        {block.email}
      </a>
    </div>
  );
};

export default LegalContentBlock;
