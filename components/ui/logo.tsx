import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Logo.svg";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={`flex gap-x-1 items-center ${className}`}>
      <Image src={logo} alt="Logo" width={35} height={35} />
      <p className="font-semibold text-lg ">Studently</p>
    </Link>
  );
};
