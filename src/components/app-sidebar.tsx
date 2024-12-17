"use client"

import * as React from "react"
import {
  Calendar,
  Cloud,
  Command,
  Contact,
  GraduationCap,
  LayoutDashboardIcon,
  LifeBuoy,
  MapIcon,
  Megaphone,
  Package2,
  Power,
  Send,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
  ClerkProvider,
  UserButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
      isActive: true,
    },
    {
      title: "Agents",
      url: "/Agents",
      icon: Contact,
    },
    {
      title: "Order",
      url: "#",
      icon: Package2,
      items: [
        {
          title: "Cellular",
          url: "/order-cellular",
        },
        {
          title: "Satellite",
          url: "/order-satellite",
        },
        {
          title: "IoT",
          url: "/order-iot",
        },
        {
          title: "Mobility",
          url: "/order-mobility",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "IQMC Cloud",
      url: "https://cloud.revgennetworks.com",
      icon: Cloud,
    },
    {
      name: "Cell Mapper",
      url: "https://www.cellmapper.net",
      icon: MapIcon,
    },
    {
      name: "SIM Checker",
      url: "/sim-checker",
      icon: Power,
    },
    {
      name: "Assets",
      url: "/marketing-assets",
      icon: Megaphone,
    },
    {
      name: "Events",
      url: "/events",
      icon: Calendar,
    },
    {
      name: "Training",
      url: "https://academy.revgennetworks.com/",
      icon: GraduationCap,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">RevGen Networks</span>
                  <span className="truncate text-xs">Distributor</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <SignedIn>
          <NavUser />
        </SignedIn>
      </SidebarFooter>
    </Sidebar>
  )
}
