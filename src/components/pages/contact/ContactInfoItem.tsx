import ContactInfoIcon from "./ContactInfoIcon";
import type { ContactInfoItem as ContactInfoItemData } from "@/constant/contactData";

const ContactInfoItem: React.FC<{ item: ContactInfoItemData; isFirst: boolean; isLast: boolean }> = ({
  item,
  isFirst,
  isLast,
}) => (
  <div
    className={`flex gap-4 border-b border-g200 py-5 ${isFirst ? "pt-0" : ""} ${isLast ? "border-b-0 pb-0" : ""}`}
  >
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-10 text-purple">
      <ContactInfoIcon name={item.icon} className="h-[19px] w-[19px]" />
    </div>
    <div>
      <div className="mb-1 text-xs font-medium tracking-[0.04em] text-g400 uppercase">{item.label}</div>
      {item.valueHref ? (
        <a
          href={item.valueHref}
          className="block font-heading text-[15px] font-medium tracking-[-0.01em] text-charcoal transition-colors duration-200 hover:text-purple"
        >
          {item.value}
        </a>
      ) : (
        <span className="block font-heading text-[15px] font-medium tracking-[-0.01em] text-charcoal">
          {item.value}
        </span>
      )}
      {item.sub && <div className="mt-0.5 text-[13px] font-normal text-g500">{item.sub}</div>}
      {item.extraLink && (
        <a
          href={item.extraLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block text-[13px] font-medium text-charcoal transition-colors duration-200 hover:text-purple"
        >
          {item.extraLink.text}
        </a>
      )}
    </div>
  </div>
);

export default ContactInfoItem;
