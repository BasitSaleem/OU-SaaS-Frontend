import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import logo from "../../../../public/assets/logo.png";

interface LogoProps {
  href?: string;
  imgHeight?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ href = "/", imgHeight = 34, className }) => (
  <Link href={href} className={clsx("flex shrink-0 items-center", className)}>
    <Image
      src={logo}
      alt="Owners Universe"
      height={imgHeight}
      style={{ height: imgHeight, width: "auto" }}
      priority
    />
  </Link>
);

export default Logo;
