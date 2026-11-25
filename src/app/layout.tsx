import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const dm = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });

export const metadata: Metadata = {
  title: "Elisa Raeli | Full-Stack Web Developer",
  description: "Portfolio di un full-stack web developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${dm.variable} ${grotesk.variable}`}>
      <body
        suppressHydrationWarning
        className="flex min-h-screen flex-col font-sans antialiased"
      >
        <Navbar />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}