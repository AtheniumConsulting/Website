import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const lato = localFont({
  src: [
    { path: "../fonts/Lato-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/Lato-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Lato-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/Lato-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/Lato-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Athenium Consulting",
  description: "Connected technologies meet industry expertise.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-ZA" className={`${lato.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
