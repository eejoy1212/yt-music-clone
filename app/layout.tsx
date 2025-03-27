import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { sleep } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "유튜브 뮤직 클론코딩 페이지",
  description: "유튜브 뮤직 클론코딩 페이지 입니다.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("before rootlayout sleep...")
 await sleep(2000);
  console.log("after rootlayout sleep...")
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider  attribute="class" defaultTheme="dark" enableSystem>
        <Sidebar> {children}</Sidebar>
         
        </ThemeProvider>
      </body>
    </html>
  );
}
