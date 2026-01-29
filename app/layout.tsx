import "./globals.css";
import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Adam — Blog",
  description: "Economics, finance, and notes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
