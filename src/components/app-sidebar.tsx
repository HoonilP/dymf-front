"use client"

import * as React from "react"
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,

  Users,
  PenLine,
  Calculator,
  Folders,
  Search,
  CalendarClock,
  Calendar,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavManagements } from "@/components/nav-management"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "",
  },
  // teams: [
  //   {
  //     name: "Acme Inc",
  //     logo: GalleryVerticalEnd,
  //     plan: "Enterprise",
  //   },
  //   {
  //     name: "Acme Corp.",
  //     logo: AudioWaveform,
  //     plan: "Startup",
  //   },
  //   {
  //     name: "Evil Corp.",
  //     logo: Command,
  //     plan: "Free",
  //   },
  // ],
  navMain: [
    {
      title: "Registration",
      url: "#",
      icon: PenLine,
      isActive: true,
      items: [
        {
          title: "Customer",
          url: "#",
        },
        {
          title: "Guarantor",
          url: "#",
        },
        {
          title: "Loan",
          url: "#",
        },
      ],
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
      items: [
        {
          title: "Customer",
          url: "#",
        },
        {
          title: "Loan",
          url: "#",
        },
        {
          title: "Guarantor",
          url: "#",
        },
        {
          title: "Collateral",
          url: "#",
        },
        {
          title: "Counseling",
          url: "#",
        },
      ],
    },
    {
      title: "Repayment",
      url: "#",
      icon: Calendar,
      items: [
        {
          title: "Single",
          url: "#",
        },
        {
          title: "Batch",
          url: "#",
        },
      ],
    },
    {
      title: "Overdue",
      url: "#",
      icon: CalendarClock,
      items: [
        {
          title: "Registration",
          url: "#",
        },
        {
          title: "Search",
          url: "#",
        },
        {
          title: "Management",
          url: "#",
        },
      ],
    },
  ],
  menus: [
    {
      name: "Report",
      url: "#",
      icon: Folders,
    },
    {
      name: "HR",
      url: "#",
      icon: Users,
    },
    {
      name: "Calculator",
      url: "/calculator",
      icon: Calculator,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <img src="@/app/favicon.ico" alt="" /> */}
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavManagements menus={data.menus} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      
      <SidebarRail />
    </Sidebar>
  )
}
