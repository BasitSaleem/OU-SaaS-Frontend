import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

const CHEVRON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-2" aria-hidden>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const Breadcrumbs: React.FC<{ items: Crumb[]; className?: string }> = ({ items, className }) => (
  <nav aria-label="Breadcrumb" className={className}>
    <ol className="m-0 flex list-none items-center gap-1.5 p-0 text-sm font-medium text-[#5f5f5a]">
      {items.map((item) => (
        <li key={item.label} className="inline-flex items-center gap-1.5">
          {item.href ? (
            <>
              <Link
                href={item.href}
                className="text-[#5f5f5a] [background-image:linear-gradient(currentColor,currentColor)] [background-position:0_100%] [background-repeat:no-repeat] [background-size:0_1px] [transition:color_180ms,background-size_420ms_var(--ease-out)] hover:text-ink hover:[background-size:100%_1px]"
              >
                {item.label}
              </Link>
              {CHEVRON}
            </>
          ) : (
            <span aria-current="page" className="text-ink">
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
