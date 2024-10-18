// import { SkeletonTheme } from "@/components";
import AuthProvider from "@/context/auth-provider";
import QueryProvider from "@/context/query-provider";
import { ThemeProvider } from "@/context/theme-provider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "DevOverflow",
  description:
    "A community-driven plartform for asking and answering programming questions get help, share knowledge, and collaborate with developers from aroud the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/assets/images/site-logo-svg",
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            {/* <SkeletonTheme> */}
            <QueryProvider>{children}</QueryProvider>
            {/* </SkeletonTheme> */}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
