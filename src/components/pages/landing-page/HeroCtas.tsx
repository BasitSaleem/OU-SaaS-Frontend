import ButtonInkPill from "@/components/button/ButtonInkPill";
import { LOGIN_URL } from "@/constant/navigationData";

const HeroCtas: React.FC = () => (
  <div className="mt-9 flex flex-wrap animate-[intro_1100ms_var(--ease-out)_both] justify-center gap-3 [animation-delay:440ms]">
    <ButtonInkPill href="#products" variant="primary" size="lg" icon="arrow">
      Explore Products
    </ButtonInkPill>
    <ButtonInkPill href={LOGIN_URL} target="_blank" variant="ghost" size="lg">
      Log In
    </ButtonInkPill>
  </div>
);

export default HeroCtas;
