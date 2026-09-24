import Image from "next/image";
import clsx from "clsx";
import CardDesc from "@/components/pages/typography/CardDesc";
import type { ProductPanelData } from "@/constant/productsData";

const VARIANT_BG: Record<ProductPanelData["variant"], string> = {
  op: "bg-[linear-gradient(145deg,#FDE8E5_0%,#F9CCC6_40%,#F4B5AC_100%)]",
  oi: "bg-[linear-gradient(145deg,#EDE7FE_0%,#DDD2FC_40%,#CEBEFA_100%)]",
};

const ProductPanel: React.FC<{ product: ProductPanelData }> = ({ product }) => (
  <article
    data-card
    style={{ top: product.stickyTop, zIndex: product.zIndex }}
    className={clsx(
      "sticky grid grid-cols-[1fr_340px] items-center gap-[clamp(32px,5vw,72px)] rounded-3xl p-[clamp(36px,5vh,56px)_clamp(32px,5vw,64px)] transition-[transform,box-shadow] duration-400 ease-[var(--ease)] will-change-transform motion-reduce:!relative motion-reduce:!top-auto motion-reduce:!transform-none motion-reduce:!transition-none",
      "max-[900px]:!relative max-[900px]:!top-auto max-[900px]:!scale-100 max-[900px]:!translate-y-0 max-[900px]:grid-cols-[1fr_200px] max-[900px]:gap-5 max-[900px]:p-6",
      "max-[600px]:grid-cols-1 max-[600px]:p-8 max-[600px]:text-center",
      VARIANT_BG[product.variant]
    )}
  >
    <div className="relative z-[2]">
      <Image src={product.logo} alt={product.logoAlt} className="mb-[18px] h-[clamp(30px,2.2vw+18px,50px)] w-auto" />
      <CardDesc className="mb-5 max-w-[420px] max-[600px]:mx-auto">{product.description}</CardDesc>
      <ul className="mb-6 flex flex-wrap gap-2 max-[600px]:justify-center">
        {product.features.map((feature) => (
          <li
            key={feature}
            className="rounded-full border border-black/[0.12] bg-white/35 px-3.5 py-1.5 text-[11.5px] font-medium tracking-[0.03em] text-g600 uppercase backdrop-blur-[4px] transition-[background,border-color] duration-250 ease-[var(--ease)] [@media(hover:hover)_and_(pointer:fine)]:hover:border-black/[0.18] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/70"
          >
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={product.visitUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-hover
        className="magnet inline-flex w-fit items-center gap-2 rounded-full bg-purple px-[26px] py-3 text-[13.5px] font-semibold text-white transition-[gap,transform,box-shadow] duration-250 ease-[var(--ease)] max-[600px]:mx-auto [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 [@media(hover:hover)_and_(pointer:fine)]:hover:gap-3 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-purple-d [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_8px_24px_-6px_rgba(121,92,245,.4)]"
      >
        {product.visitLabel}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[13px] w-[13px]">
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </a>
    </div>

    <div className="group relative z-[2] aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-white/25 shadow-[0_8px_32px_-8px_rgba(0,0,0,.12)] transition-[transform,box-shadow] duration-500 ease-[var(--ease-h)] after:absolute after:inset-0 after:rounded-[18px] after:shadow-[inset_0_0_0_1px_rgba(255,255,255,.2)] after:content-[''] max-[600px]:mx-auto max-[600px]:max-w-[280px] [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1 [@media(hover:hover)_and_(pointer:fine)]:hover:rotate-[-0.5deg] [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_18px_48px_-12px_rgba(0,0,0,.2)]">
      <Image
        src={product.media}
        alt={product.logoAlt}
        loading="lazy"
        className="h-full w-full object-cover object-center transition-transform duration-700 ease-[var(--ease-h)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.04]"
      />
    </div>
  </article>
);

export default ProductPanel;
