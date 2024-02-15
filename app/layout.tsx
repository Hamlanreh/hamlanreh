import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Hamlanreh | Portfolio",
  description: "Oluwabi Ahmed's portfolio website for showcasing some of my finest project to potential client or employers.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
