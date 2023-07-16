import React from "react";

type Props = {
    userName: string;
};

function Header({userName}: Props) {
  return (
    <header className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-xl">{userName}</div>
        <div className="">
            <button className="font-bold text-white rounded-md bg-red-600 hover:bg-red-800 p-2">
                LogOut
            </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
