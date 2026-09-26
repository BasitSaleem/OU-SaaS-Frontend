import Image from "next/image";
import clsx from "clsx";
import DashboardIcon, { type DashboardIconKey } from "./DashboardIcons";
import { PRODUCT_LOGOS } from "@/constant/productLogos";
import type { ProductKey } from "@/constant/navigationData";
import { DASH_ACCOUNT, DASH_AVATAR, DASH_NAV_ICON, DASH_NAV_ITEM_ACTIVE, DASH_NAV_ITEM_BASE, DASH_SIDE, DASH_SIDE_LOGO } from "@/styles/dashboardClasses";

interface DashboardSidebarProps {
  productKey: ProductKey;
  navItems: { icon: DashboardIconKey; label: string; active?: boolean }[];
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ productKey, navItems }) => (
  <aside className={DASH_SIDE}>
    <Image src={PRODUCT_LOGOS[productKey]} alt="" className={DASH_SIDE_LOGO} />
    <ul className="flex flex-col gap-[calc(2*var(--u))]">
      {navItems.map((item) => (
        <li key={item.label} className={clsx(DASH_NAV_ITEM_BASE, item.active && DASH_NAV_ITEM_ACTIVE)}>
          <DashboardIcon name={item.icon} className={clsx(DASH_NAV_ICON, item.active && "!text-[var(--accent)]")} />
          {item.label}
        </li>
      ))}
    </ul>
    <div className={DASH_ACCOUNT}>
      <span className={DASH_AVATAR}>RC</span>
      <span>
        <strong className="block text-[calc(11*var(--u))] font-semibold">Rivera &amp; Co.</strong>
        <small className="block text-[calc(9.5*var(--u))] text-neutral">Owners Universe account</small>
      </span>
    </div>
  </aside>
);

export default DashboardSidebar;
