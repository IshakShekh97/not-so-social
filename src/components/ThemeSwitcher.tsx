"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

interface ThemeSwitcherProps {
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

export function ThemeSwitcher({ className, variant }: ThemeSwitcherProps) {
  const { setTheme } = useTheme();

  return (
    <>
      <div className={className}>
        <Button
          variant={variant}
          size={"icon"}
          onClick={() => setTheme("dark")}
          className="dark:hidden"
        >
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        <Button
          onClick={() => setTheme("light")}
          size={"icon"}
          variant={variant}
          className="hidden dark:flex"
        >
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </div>
    </>
  );
}
