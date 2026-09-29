import PageHeroField from "@/components/common-components/PageHeroField";
import Breadcrumbs from "@/components/common-components/Breadcrumbs";
import HoverWord from "@/components/common-components/HoverWord";
import ProductDoor from "./ProductDoor";
import { CONTAINER } from "@/styles/sectionClasses";
import { PRODUCT_DOORS, PRODUCTS_HERO } from "@/constant/productsPageData";

const INTRO = "animate-[intro_1100ms_var(--ease-out)_both]";

const ProductsHero: React.FC = () => (
  <PageHeroField id="products" labelledBy="phero-title">
    <div className={`${CONTAINER} relative z-1 flex flex-col items-center text-center`}>
      <Breadcrumbs items={PRODUCTS_HERO.breadcrumb} className={`${INTRO} [animation-delay:80ms]`} />
      <h1
        id="phero-title"
        className={`${INTRO} mt-5 text-[clamp(52px,8vw,116px)] leading-[0.96] font-semibold tracking-[-0.06em] [animation-delay:160ms]`}
      >
        {PRODUCTS_HERO.titleLead} <HoverWord>{PRODUCTS_HERO.titleWord}</HoverWord>
      </h1>
      <p
        className={`${INTRO} mt-6 max-w-[640px] text-[clamp(17px,1.3vw,19px)] leading-[1.6] text-neutral [animation-delay:240ms]`}
        style={{ textWrap: "pretty" }}
      >
        {PRODUCTS_HERO.body}
      </p>
      <div
        className={`${INTRO} mt-[clamp(48px,6vw,72px)] grid w-full max-w-[1040px] grid-cols-2 gap-[18px] text-left [animation-delay:340ms] [perspective:1200px] max-[720px]:grid-cols-1`}
      >
        {PRODUCT_DOORS.map((door) => (
          <ProductDoor key={door.key} door={door} />
        ))}
      </div>
    </div>
  </PageHeroField>
);

export default ProductsHero;
