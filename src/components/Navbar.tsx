import Image from "next/image";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="sticky top-0 w-full border-b bg-background/50 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={"/"} className="flex items-center gap-2">
            <div className="relative h-14 w-10">
              <Image src={"/logo.svg"} alt="logo" fill className="w-full" />
            </div>
            <p className="flex text-lg font-bold"> Not So Social </p>
          </Link>

          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
