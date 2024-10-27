import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Amizhthan Portfolio",
  description: "amizhthan's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} bg-[#000000]`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
