import ButtonPrimary from "@/components/button/ButtonPrimary";
import ButtonGhost from "@/components/button/ButtonGhost";
import { LOGIN_URL } from "@/constant/navigationData";

const HeroCtas: React.FC = () => (
  <div
    className="flex flex-wrap items-center justify-center gap-3 opacity-0 animate-[hUp_0.45s_var(--ease)_forwards]"
    style={{ animationDelay: "2.15s" }}
  >
    <ButtonPrimary text="Explore Products" href="#products" />
    <ButtonGhost text="Log In" href={LOGIN_URL} target="_blank" />
  </div>
);

export default HeroCtas;
