import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habee",
  description: "Habit tracking made simple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
