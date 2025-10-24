"use client"
import {Settings } from "lucide-react";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import { Progress } from "../ui/progress";
import { UserButton } from "@clerk/nextjs";

export function AppSidebar() {
    const [projectList, setProjectList]=useState([])
  return (
    <Sidebar side="left" variant="sidebar">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 py-10">
            <Image
              src="/HomeSection/assets/logosaas.svg"
              alt="logo"
              width={50}
              height={50}
              className="w-8 h-8 md:w-[45px] md:h-[45px] lg:w-10 lg:h-[50px]"
            />
            <h2 className="text-2xl font-semibold">Xender.ai</h2>
          </SidebarGroupLabel>
          <Link href={"/workspace"}>
            <Button className="cursor-pointer w-full">+ Add New Project</Button>
          </Link>

          <SidebarGroupContent>
            <SidebarGroup>
                <SidebarGroupLabel>Projects</SidebarGroupLabel>
              {projectList.length==0&&<h2 className="text-sm px-2 text-gray-500">No Projects Found</h2>}
            </SidebarGroup>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-3 border rounded-xl space-x-3 bg-gray-300 flex flex-col gap-4">
            <h2 className="flex items-center">Remaining Credits: <span className="font-bold ml-1">2</span></h2>
            <Progress value={33} />
            <Button>
                Upgrade to unlimited
            </Button>
        </div>
        <div className="flex items-center justify-between bg-gray-300 px-2 py-2 rounded-xl">
            <Button className="cursor-pointer">
                <Settings className="w-4 h-4" />
                Settings
            </Button>
            <UserButton />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
