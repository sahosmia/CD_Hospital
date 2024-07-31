"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { signIn } from "next-auth/react";

const OAuthContent = () => {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "http://localhost:3000/blood-groups" });
  };
  return (
    <>
      <p className="text-center px-2 my-6 text-sm font-medium relative after:absolute after:w-[38%] after:bg-slate-300 after:h-[1px] after:top-1/2 after:left-0 after:translate-y-1/2 before:absolute before:w-[38%] before:bg-slate-300 before:h-[1px] before:top-1/2 before:right-0 before:translate-y-1/2">
        Sign In With
      </p>
      <div className="flex gap-3">
        <Button
          className="w-full"
          variant={"outline"}
          onClick={handleGoogleSignIn}
        >
          Sign In With Google
        </Button>
        <Button className="w-full" variant={"outline"}>
          Sign in With Facbook
        </Button>
      </div>
    </>
  );
};

export default OAuthContent;
