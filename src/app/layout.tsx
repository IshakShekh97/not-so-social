import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/ThemeProviders";

const recursive = Recursive({
  subsets: ["latin"],
  weight: ["400", "500", "700", "1000", "300", "600", "900", "800"],
});

export const metadata: Metadata = {
  title: "Not So Social",
  description: "A social media platform for with a Social Dilemma",
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={` ${recursive.className} antialiased`}>
          {" "}
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
