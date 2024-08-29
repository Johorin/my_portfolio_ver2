import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/Components/Header";

export const metadata: Metadata = {
  title: "YUYA HOJO PORTFOLIO",
  description: "WEBエンジニア北條佑弥のポートフォリオサイト第２弾！満を持してリニューアルしました！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-slate-300">
          <Header />
        {children}
        </main>
      </body>
    </html>
  );
}
