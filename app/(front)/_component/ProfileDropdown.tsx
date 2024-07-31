import { User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/auth";
import LogOutButton from "./LogOutButton";
import Link from "next/link";

export async function ProfileDropdown() {
  const session = await auth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="mt-2 md:mt-0 md:ml-4 text-gray-800">
        {session?.user?.name}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/admin/profile">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <LogOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
