import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
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
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ClerkProvider
          appearance={{
            elements: {
              formFieldInput: "focus-visible:outline-none",
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:no-underline",
            },
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
