import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Folio",
    template: "%s — Folio",
  },
  description:
    "A multidisciplinary portfolio — UX research, photography, code, and writing.",
  openGraph: {
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-11">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
