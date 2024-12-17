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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
            <div className="aspect-video rounded-xl bg-muted/50 col-span-3">
              <Card className="flex flex-col justify-center min-h-full">
                <CardHeader className="items-center pb-4">
                  <CardTitle>Active Services</CardTitle>
                  <CardDescription className="pb-2">Running Total</CardDescription>
                  <p className="text-6xl font-semibold">1,524</p>
                </CardHeader>
              </Card>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50 col-span-3">
              <Card className="flex flex-col justify-center min-h-full">
                <CardHeader className="items-center pb-4">
                  <CardTitle>Sales</CardTitle>
                  <CardDescription className="pb-2">Month to Date</CardDescription>
                  <p className="text-6xl font-semibold">84</p>
                </CardHeader>
              </Card>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50 col-span-3">
              <Card className="flex flex-col justify-center min-h-full">
                <CardHeader className="items-center pb-4">
                  <CardTitle>Disconnects</CardTitle>
                  <CardDescription className="pb-2">Month to Date</CardDescription>
                  <p className="text-6xl font-semibold">19</p>
                </CardHeader>
              </Card>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50 col-span-3">
              <Card className="justify-center min-h-full">
                <CardHeader className="flex flex-col items-center pb-4 min-h-full">
                  <CardTitle>Commissions</CardTitle>
                  <CardDescription className="pb-2">Estimate Subject to Change</CardDescription>
                  <h1 className="font-semibold text-6xl">$481.43</h1>
                </CardHeader>
              </Card>
            </div>
            {/* Second Row */}

            <div className="rounded-xl col-span-8 row-span-4">
              <ActivationsAndCancellations />
            </div>
            <div className="rounded-xl col-span-4 row-span-2">
              <SalesByProduct />
            </div>
            <div className="rounded-xl bg-muted/50 col-span-4 row-span-2">
              <Card className="flex flex-col justify-center min-h-full">
                <CardHeader className="items-center pb-4">
                  <CardTitle>Current Promo</CardTitle>
                  <p className="text-4xl font-semibold flex-shrink">🎄 Holiday2024 🎄</p>
                </CardHeader>
              </Card>
            </div>
            <div className="rounded-xl bg-muted/50 col-span-12 p-4">
              Recent Sales
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}