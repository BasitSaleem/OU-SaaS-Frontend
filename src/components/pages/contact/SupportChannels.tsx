import Reveal from "@/components/common-components/Reveal";
import { CONTAINER } from "@/styles/sectionClasses";
import SupportChannelCard from "./SupportChannelCard";
import { SUPPORT_CHANNELS } from "@/constant/contactChannelsData";

const SupportChannels: React.FC = () => (
  <section className="pb-[clamp(80px,10vw,130px)]" aria-label="Support channels">
    <div className={CONTAINER}>
      <Reveal mode="stagger" className="grid grid-cols-3 gap-4 max-[1000px]:grid-cols-1 max-[1000px]:max-w-[620px] max-[1000px]:mx-auto">
        {SUPPORT_CHANNELS.map((channel) => (
          <SupportChannelCard key={channel.id} channel={channel} />
        ))}
      </Reveal>
    </div>
  </section>
);

export default SupportChannels;
