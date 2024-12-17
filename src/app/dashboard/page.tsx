"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { SalesByProduct } from "@/components/charts/sales-by-product"
import { ActivationsAndCancellations } from "@/components/charts/activations-and-cancellations"
import {
  ChartConfig,
} from "@/components/ui/chart";
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 w-full md:grid-cols-12">
            {/* First Row */}
            <div className="aspect-video rounded-xl bg-muted/50 col-span-3 p-4">Active Services</div>
            <div className="aspect-video rounded-xl bg-muted/50 col-span-3 p-4">Sales (MTD)</div>
            <div className="aspect-video rounded-xl bg-muted/50 col-span-3 p-4">Active Agents</div>
            <div className="aspect-video rounded-xl bg-muted/50 col-span-3 p-4">Projected Commissions</div>
            {/* Second Row */}
            <div className="rounded-xl col-span-8 row-span-4">
              <ActivationsAndCancellations />
            </div>
            <div className="rounded-xl col-span-4 row-span-2">
              <SalesByProduct />
            </div>
            <div className="rounded-xl bg-muted/50 col-span-4 row-span-2 p-4">Current Promo</div>
            <div className="rounded-xl bg-muted/50 col-span-12 p-4">Recent Sales</div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}