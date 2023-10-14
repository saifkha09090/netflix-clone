import Link from "next/link";
import Logo from "./Logo";

import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="login_bg_gradient bg-cover h-screen">
      <div className="flex justify-between">
        <Logo style="w-52 h-[5rem] m-8" />
        <div className="h-[5rem] m-10">
        <Link href="/auth/login"><button className="font-bold bg-red-500 text-white text-1xl p-2 font-sans rounded">
            Sign in
          </button></Link>
        </div>
      </div>

      <div className="text-center h-4/6 p-24">
        <h2 className=" text-5xl font-bold">
          Unlimited movies, TV shows, and more
        </h2>
        <Link href="/auth/login"><button className="m-4 font-bold bg-red-500 text-white text-1xl p-2 font-sans rounded">
          Sign in
        </button></Link>
      </div>
    </div>
  );
}
