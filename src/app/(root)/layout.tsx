import { LeftSidebar } from "@/components/left-sidebar";
import { Navbar } from "@/components/navbar";
import { RightSidebar } from "@/components/right-sidebar";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSidebar />
      </div>
      <Toaster />
    </main>
  );
}
