import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/shared/LogoutButton";

const Home = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/log-in");
  }
  return (
    <div className="flex flex-col gap-3 h-screen justify-center items-center">
      <h1 className=" font-semibold font-2xl">
        Welcome to the home page{" "}
        <span className="font-3xl text-blue-600">{session?.user?.name}</span>
      </h1>
      <LogoutButton />
    </div>
  );
};

export default Home;
