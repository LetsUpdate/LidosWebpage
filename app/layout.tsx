import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lindos - Afro / Latin / Tech House",
  description: "Underground music collective bringing the heat with Afro, Latin, and Tech House vibes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
