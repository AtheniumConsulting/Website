import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const lato = localFont({
  variable: "--font-lato",
  display: "swap",
  src: [
    { path: "../fonts/Lato-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/Lato-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Lato-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/Lato-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/Lato-Black.ttf", weight: "900", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Athenium Consulting",
  description: "Connected technologies meet industry expertise.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-ZA"
      className={cn("h-full", "antialiased", lato.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
