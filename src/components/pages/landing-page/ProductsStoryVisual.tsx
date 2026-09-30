import Image from "next/image";
import clsx from "clsx";
import DashboardWindow from "./DashboardWindow";
import PulseDashboard from "./PulseDashboard";
import InventoryDashboard from "./InventoryDashboard";

const RAIL_ITEM = "relative pb-2.5 transition-colors duration-[420ms] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-ink after:transition-transform after:duration-[900ms] after:ease-[var(--ease-out)] after:content-['']";

const SCREEN = "absolute inset-0 opacity-0 transition-[opacity,transform] duration-[900ms] ease-[var(--ease-out)] [transform:translate3d(0,14px,0)_scale(0.985)]";
const SCREEN_ACTIVE = "opacity-100 [transform:none]";

const PHOTO_BASE =
  "absolute -bottom-[12%] left-[-9%] w-[40%] overflow-hidden rounded-[var(--r-md)] border-[6px] border-paper opacity-0 transition-opacity duration-[700ms] ease-[var(--ease-out)] [aspect-ratio:3/2] [box-shadow:var(--shadow-2)] max-[1080px]:left-[-4%]";

const ProductsStoryVisual: React.FC<{ activeIndex: number }> = ({ activeIndex }) => (
  <div aria-hidden className="sticky top-0 flex h-screen items-center max-[900px]:hidden">
    <div className="relative w-full">
      <div className="mb-4.5 flex gap-6 text-sm font-medium text-neutral-2">
        <span className={clsx(RAIL_ITEM, activeIndex === 0 ? "text-ink after:scale-x-100" : "after:scale-x-0")}>Owners Pulse</span>
        <span className={clsx(RAIL_ITEM, activeIndex === 1 ? "text-ink after:scale-x-100" : "after:scale-x-0")}>Owners Inventory</span>
      </div>

      <DashboardWindow>
        <div className={clsx(SCREEN, activeIndex === 0 && SCREEN_ACTIVE)}>
          <PulseDashboard />
        </div>
        <div className={clsx(SCREEN, activeIndex === 1 && SCREEN_ACTIVE)}>
          <InventoryDashboard />
        </div>
      </DashboardWindow>

      <figure
        className={clsx(PHOTO_BASE, activeIndex === 0 && "opacity-100")}
        style={{ transform: "translate3d(0, calc((0.5 - var(--p)) * 90px + 20px), 0)" }}
      >
        <Image
          src="/assets/images/electrician-sm.webp"
          alt="Electrician in a blue work jacket wiring a residential breaker panel"
          width={720}
          height={480}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </figure>
      <figure
        className={clsx(PHOTO_BASE, activeIndex === 1 && "opacity-100")}
        style={{ transform: "translate3d(0, calc((0.5 - var(--p)) * 90px + 20px), 0)" }}
      >
        <Image
          src="/assets/images/boutique-sm.webp"
          alt="Bright fashion boutique with handbags and shoes displayed on shelves"
          width={720}
          height={480}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </figure>
    </div>
  </div>
);

export default ProductsStoryVisual;
