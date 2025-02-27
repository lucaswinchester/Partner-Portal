"use client";

import { useEffect, useState } from "react";
import { Member, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";


export default function DemoPage() {
  const [data, setData] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/organization/members");
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
  
        const json = await response.json();
        console.log("Raw API Response:", json);
  
        const transformedData = json.members.map((member: any) => ({
          id: member.id,
          name: `${member.publicUserData.firstName} ${member.publicUserData.lastName}`,
          email: member.publicUserData.identifier,
          role: member.role.replace("org:", ""),
          permissions: member.permissions.join(", "),
          organizationName: member.organization.name,
          imageUrl: member.publicUserData.imageUrl,
        }));
  
        console.log("Transformed Data:", transformedData);
        setData([...transformedData]); // ✅ Force update
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    }
  
    fetchData();
  }, []);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
                  <BreadcrumbLink href="/Agents">Agents</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="p-4 pt-0">
          <div className="container mx-auto py-10 gap-4 width-full">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
