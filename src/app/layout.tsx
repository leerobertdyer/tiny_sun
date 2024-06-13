import type { Metadata } from "next";
import { Corben, Inter } from "next/font/google";
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
      <body className={corben.className}>{children}</body>
    </html>
  );
}
