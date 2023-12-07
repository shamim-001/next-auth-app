"use client";
import React from "react";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

const GithubLoginButton = () => {
  return (
    <Button
      onClick={() => signIn("github")}
      className="mt-5"
      variant={"secondary"}
    >
      Login with Github <Github className="h-4 w-4 ml-2" />
    </Button>
  );
};

export default GithubLoginButton;
