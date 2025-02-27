"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
  imageUrl: string;
}

export const columns: ColumnDef<Member>[] = [
  {
    accessorKey: 'imageUrl',
    header: 'Avatar',
    cell: ({ row }) => {
      const { name, imageUrl } = row.original;
      return (
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src={imageUrl}
              alt={name}
              className="object-cover w-full h-full rounded-full"
            />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "organizationName",
    header: "Organization",
  },
];

