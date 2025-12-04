import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sales Dashboard",
  description: "Sales dashboard with Next.js, Tailwind CSS, and Recharts"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}


