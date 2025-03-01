import { SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/contants";
import { Home, LogOut } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

const DesktopNav = async () => {
  const user = await currentUser();
  return (
    <div className="md:flex hidden gap-2">
      <ThemeSwitcher variant="outline" />
      <Button variant={"outline"} asChild>
        <Link href={"/"}>
          <Home /> Home
        </Link>
      </Button>

      {user ? (
        <>
          {NAV_ITEMS.map((item, index) => (
            <Button key={index} variant={"outline"} asChild>
              <Link href={item.href}>
                <item.icon /> {item.title}
              </Link>
            </Button>
          ))}
          <SignOutButton>
            <Button variant={"destructive"} size={"icon"}>
              <LogOut />
            </Button>
          </SignOutButton>
        </>
      ) : (
        <>
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Sign Up</Button>
          </SignUpButton>
        </>
      )}
    </div>
  );
};

export default DesktopNav;
