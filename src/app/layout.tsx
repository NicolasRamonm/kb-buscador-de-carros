import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppTopBar } from "@/components/blocks/AppTopBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Cargen",
  description: "Encontre o carro ideal com ajuda de IA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AppTopBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
