"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

type Props = {};

function Login({}: Props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Signup function = Post to datbase via API route
  const onLogin = async () => {};

  return (
    <form className="">
      <h2 className="text-2xl text-center font-bold p-2">Login</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
          <Link
            href="/forgot-password"
            className="text-blue-500 hover:text-blue-600 text-[10px] font-semibold"
          >
            Forgot Password?
          </Link>
      </div>
      {/*  
      <div className="mb-4">
        <label className="flex items-center">
          <input
            className="mr-2 leading-tight"
            type="checkbox"
            name="rememberMe"
  
          />
          <span className="text-sm">Remember me</span>
        </label>
      </div>
      */}
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Login
        </button>
        <Link
          href="/signup"
          className="text-blue-500 hover:text-blue-600 text-sm font-semibold"
        >
          No Account? Sign Up
        </Link>
      </div>
    </form>
  );
}

export default Login;
