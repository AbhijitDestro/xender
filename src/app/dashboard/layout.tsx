import { Navbar } from "@/components/Dashboard/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Dashboard/AppSidebar";

import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>
  <SidebarProvider>
    <AppSidebar />
    <div className="w-full h-full">
       {children}
       </div>
       </SidebarProvider>
  </>;
}