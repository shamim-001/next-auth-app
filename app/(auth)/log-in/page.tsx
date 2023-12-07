import { authOptions } from "@/app/utils/auth";
import GithubLoginButton from "@/components/shared/GithubLoginButton";
import SignInForm from "@/components/shared/SignInForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const Login = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  return (
    <div className="flex flex-col justify-center items-center p-5 gap-6 w-screen h-screen  ">
      <Card>
        <CardHeader>
          <h1 className="font-semibold text-3xl">Please Log In</h1>
        </CardHeader>
        <CardContent>
          <section className="flex flex-col">
            <SignInForm />
            <GithubLoginButton />
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
