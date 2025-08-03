import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habee – Build habits that stick",
  description:
    "Habee is a cheerful habit‑tracking app to help you grow routines and join a supportive hive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
