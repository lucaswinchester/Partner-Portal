"use client";

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Moon,
  Sun,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  ClerkProvider,
  SignedIn,
  SignInButton,
  SignedOut,
  SignOutButton,
  UserButton,
  useClerk,
  useUser,
} from "@clerk/nextjs";

export function NavUser() {
  const { isMobile } = useSidebar();
  const { theme, setTheme } = useTheme(); // Use next-themes
  const [icon, setIcon] = useState<"moon" | "sun">("moon");
  const [text, setText] = useState("Toggle to dark mode");

  useEffect(() => {
    if (theme === "dark") {
      setIcon("sun");
      setText("Toggle to light mode");
    } else {
      setIcon("moon");
      setText("Toggle to dark mode");
    }
  }, [theme]);

  const handleClick = () => {
    // Toggle theme
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Change icon
    const newIcon = icon === "moon" ? "sun" : "moon";
    setIcon(newIcon);

    // Update text
    const newText = text === "Toggle to dark mode" ? "Toggle to light mode" : "Toggle to dark mode";
    setText(newText);
  };

  const { isSignedIn, user, isLoaded } = useUser(); // Get user information
  const { signOut, openUserProfile } = useClerk(); // Access Clerk actions

  const handleSignOut = async () => {
    await signOut();
  }

  const handleUserProfile = async () => {
    await openUserProfile();
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-full">
                <AvatarImage
                  className="object-cover"
                  src={user?.imageUrl}
                  alt={user?.fullName || "User Avatar"}
                />
                <AvatarFallback className="object-cover">RG</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user?.fullName}</span>
                <span className="truncate text-xs">{user?.primaryEmailAddress?.emailAddress}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-full">
                  <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User Avatar"} />
                  <AvatarFallback className="rounded-full">RG</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{user?.fullName}</span>
                  <span className="truncate text-xs">{user?.primaryEmailAddress?.emailAddress}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={handleClick}>
                {icon === "moon" ? <Moon className="mr-2" /> : <Sun className="mr-2" />}
                {text}
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={handleUserProfile}>
                <BadgeCheck className="mr-2" />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell className="mr-2" />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut}>
              <LogOut className="mr-2" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
