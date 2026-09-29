import Reveal from "@/components/common-components/Reveal";

const ProductPricing: React.FC<{ text: string }> = ({ text }) => (
  <Reveal className="mt-4 flex flex-wrap items-center gap-[18px] rounded-[var(--r-lg)] border border-dashed border-[#cfcfca] px-7 py-5 max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-2">
    <span className="border-r border-line pr-[18px] text-sm font-medium text-[#5f5f5a] max-[720px]:border-r-0 max-[720px]:pr-0">
      Pricing
    </span>
    <p className="text-base font-medium tracking-[-0.01em]">{text}</p>
  </Reveal>
);

export default ProductPricing;
