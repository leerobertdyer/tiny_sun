import type { Metadata } from "next";
import { Corben } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";

const corben = Corben({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Tiny Sun Studio",
  description: "Remote Studio And Music Production Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId='G-GLQHP1SSNB' />
      <body className={`tracking-wide ${corben.className}`}>{children}</body>
    </html>
  );
}
