import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/Navbar";

const inter = Inter({subsets:["latin"]})

export const metadata: Metadata = {
  title: "Townin",
  description: "Townin은 뉴스, 연락처, 정보 등을 제공하는 웹사이트입니다.",
};


export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
