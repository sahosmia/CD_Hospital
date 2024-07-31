"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

const LogOutButton = () => {
  return (
    <DropdownMenuItem
      onClick={() => {
        signOut({ callbackUrl: "http://localhost:3000/login" });
      }}
    >
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log out</span>
    </DropdownMenuItem>
  );
};

export default LogOutButton;
