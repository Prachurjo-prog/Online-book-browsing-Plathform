"use client"

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { IoLogoGoogle } from "react-icons/io";

const LoginPage = () => {

  const handleGoogleSignin = async() => {
    
  const data = await authClient.signIn.social({
    provider: "google",
  });
   console.log(data)
  }

  const onSubmit = async(e)=>{
      e.preventDefault();

      const email = e.target.email.value;
      const password = e.target.password.value;
  
      const {data, error} = await authClient.signIn.email({
        email, password, callbackURL:"/"
      })
      console.log({data, error})
    }
  return (
    <div className="min-h-[80vh] flex items-center bg-[#F9FAFA] justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
        <p className="text-gray-500 mb-6">
          Login to continue your reading journey
        </p>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <h3 className="pb-1 font-bold">Email</h3>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full shadow border border-gray-100 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
          <div>
            <h3 className="pb-1 font-bold">Password</h3>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="w-full shadow border border-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
          <button className="btn w-full text-white bg-[#10131A] rounded-xl">
            Login
          </button>

          <div>
            <div className="relative flex py-5 items-center">
              <div className="grow border-t border-gray-300"></div>
              <span className="absolute left-1/2 -translate-x-1/2 bg-white px-2 text-gray-400 text-sm uppercase">
                or
              </span>
            </div>
          </div>

          <button className="btn w-full hover:bg-[#E0843E] rounded-xl" onClick={handleGoogleSignin}>
            <IoLogoGoogle className="text-xl" />
            Continue with Google
          </button>

          <span className="text-center gap-2 justify-center flex">
            New here?{" "}
            <Link href="/register" className="font-bold hover:underline">
              Create an account
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
