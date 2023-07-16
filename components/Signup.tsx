"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import {  toast }  from 'react-hot-toast';

type Props = {};

export default function Signup({}: Props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    // Check if all fields are filled
    if (user.email.length > 0 && user.password.length > 0 ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user] );

  // Router
  const router = useRouter();

  // Signup function = Post to datbase via API route
  const onSignup = async () => {
    try {
      const response =  await axios.post("/api/user/signup", user)
      //console.log(response);
      // React Hot Toast Notification Success;
      toast.success('Account created!');
      // Redirect to login page
      router.push("/login");
    } catch (error: any) {
      // Toast error
      toast.error(error.message);
      // Console log error
      //console.log(error);
    }
  };

  // React Hot Toast Notification Success
  const notifyError = () => toast.success('Account created!');
  // React Hot Toast Notification Error

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
          id="username"
          type="text"
          placeholder="Username"
          name="username"
          required={true}
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          required={true}
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
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          required={true}
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <button
          onClick={onSignup}
          disabled={buttonDisabled}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
          type="button"
        >
          Sign Up
        </button>
        <Link
          className="text-blue-500 hover:text-blue-600 font-semibold"
          href="/login"
        >
          Already have an account? Sign In
        </Link>
      </div>
    </form>
  );
}
