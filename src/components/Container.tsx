import clsx from "clsx";

const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={clsx("wrapper", className)}>{children}</div>
);

export default Container;
