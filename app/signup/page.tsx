import Signup from "@/components/Signup";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded shadow">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
        {/* Signup Component */}
        <Signup />
      </div>
    </div>
  );
}

export default page;
