import PromiseItem from "./PromiseItem";
import { CONTAINER } from "@/styles/sectionClasses";
import { OWNERS_PROMISES } from "@/constant/ownersData";

const OwnersPromises: React.FC = () => (
  <ul className={`${CONTAINER} mt-[clamp(72px,9vw,128px)] grid grid-cols-3 gap-[clamp(24px,3vw,48px)] max-[900px]:grid-cols-1`}>
    {OWNERS_PROMISES.map((promise, i) => (
      <PromiseItem key={promise.icon} promise={promise} delayMs={i * 90} />
    ))}
  </ul>
);

export default OwnersPromises;
