import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Home, Menu } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { NAV_ITEMS } from "@/lib/contants";
import Link from "next/link";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const MobileNav = async () => {
  const user = await currentUser();

  return (
    <div className="flex md:hidden gap-2">
      <ThemeSwitcher variant="outline" />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"outline"} size={"icon"}>
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent className="py-10">
          <DialogTitle hidden>Menu</DialogTitle>
          <SheetHeader className="flex items-center ">
            <h1 className="text-2xl font-bold">Menu</h1>
          </SheetHeader>

          <div className="flex flex-col gap-2">
            <Button variant={"outline"} asChild>
              <Link href={"/"}>
                <Home /> Home
              </Link>
            </Button>

            {user ? (
              <>
                {NAV_ITEMS.map((item, index) => (
                  <Button
                    key={index}
                    variant={"outline"}
                    asChild
                    className="w-full py-5"
                  >
                    <Link href={item.href}>
                      <item.icon /> {item.title}
                    </Link>
                  </Button>
                ))}
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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
