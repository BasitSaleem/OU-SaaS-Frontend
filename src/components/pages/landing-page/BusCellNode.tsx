const BusCellNode: React.FC = () => (
  <div className="relative grid min-h-[92px] place-items-center border-t border-[#1c1c1c] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-px before:-translate-x-1/2 before:bg-[var(--rail)] before:content-[''] max-[640px]:min-h-16">
    <i className="relative z-1 h-3 w-3 rounded-full bg-paper not-italic [box-shadow:0_0_0_5px_rgba(247,247,245,0.07),0_0_0_1px_#0e0e0e]" />
  </div>
);

export default BusCellNode;
